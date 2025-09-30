import { loadStripe } from '@stripe/stripe-js';
import type { Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null> | null = null;

export const getStripe = (): Promise<Stripe | null> | null => {
  const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string | undefined;
  if (!publishableKey || typeof publishableKey !== 'string') {
    console.error('Stripe: VITE_STRIPE_PUBLISHABLE_KEY no está definida.');
    return null;
  }
  if (!/^pk_((test|live)_)/.test(publishableKey)) {
    console.warn('Stripe: la clave pública no parece válida (debería empezar por pk_test_ o pk_live_).');
  }
  if (!stripePromise) {
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
};

// This file will contain the Stripe integration utilities
// For now, it's a placeholder until we connect to Supabase and implement the edge functions

export interface StripeLineItem {
  price_data: {
    currency: 'eur';
    product_data: {
      name: string;
      description?: string;
      images?: string[];
    };
    unit_amount: number; // en centavos
  };
  quantity: number;
}

export interface CheckoutSessionData {
  items: StripeLineItem[];
  customer_email?: string;
  success_url: string;
  cancel_url: string;
}

export const initializeStripeCheckout = async (items: any[], customerEmail?: string) => {
  try {
    const stripe = await (getStripe() || Promise.resolve(null));
    if (!stripe) {
      throw new Error('Stripe no está configurado (falta VITE_STRIPE_PUBLISHABLE_KEY).');
    }

    // Transformar items del carrito al formato de Stripe
    const lineItems: StripeLineItem[] = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: `${item.name} - ${item.presentation}`,
          description: `Producto de limpieza industrial`,
          images: [item.image ? `${window.location.origin}${item.image}` : undefined].filter(Boolean) as string[],
        },
        unit_amount: Math.round(item.price * 100), // Convertir euros a centavos
      },
      quantity: item.quantity,
    }));

    // Crear sesión de checkout
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: lineItems,
        customer_email: customerEmail,
        success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${window.location.origin}/carrito`,
      }),
    });

    if (!response.ok) {
      throw new Error('Error al crear la sesión de checkout');
    }

    const session = await response.json();

    // Redirigir al checkout de Stripe
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return {
      success: true,
      message: 'Redirigiendo al checkout...'
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return {
      success: false,
      message: 'Error al procesar el pago. Por favor, intente nuevamente.'
    };
  }
};

export const handleCartCheckout = async (cartItems: any[], email?: string) => {
  return await initializeStripeCheckout(cartItems, email);
};

// Función para verificar el estado del pago
export const verifyPaymentStatus = async (sessionId: string) => {
  try {
    const response = await fetch(`/api/verify-payment?session_id=${sessionId}`);
    if (!response.ok) {
      throw new Error('Error al verificar el pago');
    }
    return await response.json();
  } catch (error) {
    console.error('Error verifying payment:', error);
    return { success: false, message: 'Error al verificar el pago' };
  }
};
