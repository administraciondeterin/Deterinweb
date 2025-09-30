import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  presentation: string;
  image: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  items: CartItem[];
  total: number;
} | undefined>(undefined);

// Función helper para generar el ID compuesto
const getCompositeId = (id: string, presentation: string) => `${id}-${presentation}`;

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const compositeId = getCompositeId(action.payload.id, action.payload.presentation);
      const existingItem = state.items.find(item => 
        getCompositeId(item.id, item.presentation) === compositeId
      );
      
      let newItems;
      if (existingItem) {
        newItems = state.items.map(item =>
          getCompositeId(item.id, item.presentation) === compositeId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return { items: newItems, total };
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => 
        getCompositeId(item.id, item.presentation) !== action.payload
      );
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return { items: newItems, total };
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        getCompositeId(item.id, item.presentation) === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return { items: newItems, total };
    }
    
    case 'CLEAR_CART':
      return { items: [], total: 0 };
    
    case 'LOAD_CART': {
      const total = action.payload.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return { items: action.payload, total };
    }
    
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('deterinCart');
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: cartItems });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('deterinCart', JSON.stringify(state.items));
    try {
      const orderSummary = {
        items: state.items.map(i => ({
          id: i.id,
          name: i.name,
          price: i.price,
          quantity: i.quantity,
          presentation: i.presentation,
          image: i.image,
          lineTotal: Number((i.price * i.quantity).toFixed(2))
        })),
        total: Number(state.items.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)),
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem('deterinCartOrder', JSON.stringify(orderSummary));

      // Texto legible humano del pedido
      const euro = (n: number) => `€${n.toFixed(2)}`;
      const lines: string[] = [];
      lines.push('Pedido desde la web de Deterín');
      lines.push('');
      state.items.forEach(i => {
        const lineTotal = i.price * i.quantity;
        lines.push(`- ${i.name} (${i.presentation}) x${i.quantity}: ${euro(i.price)} c/u — ${euro(lineTotal)}`);
      });
      lines.push('');
      lines.push(`Total: ${euro(orderSummary.total)}`);
      const text = lines.join('\n');
      localStorage.setItem('deterinCartOrderText', text);

      // Enlaces listos para enviar por WhatsApp y Email
      const phone = '34608972248';
      const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      localStorage.setItem('deterinCartOrderWhatsAppUrl', waUrl);

      const subject = 'Pedido Deterín';
      const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      localStorage.setItem('deterinCartOrderMailto', mailto);
    } catch (e) {
      // noop
    }
  }, [state.items]);

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider 
      value={{ 
        state, 
        dispatch, 
        addItem, 
        removeItem, 
        updateQuantity, 
        clearCart,
        items: state.items,
        total: state.total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
