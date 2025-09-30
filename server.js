require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY || process.env.VITE_STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// Configuración de Nodemailer con Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const ORDERS_FILE = path.join(__dirname, 'orders.json');

// Utilidad para leer y escribir pedidos
function readOrders() {
  if (!fs.existsSync(ORDERS_FILE)) return [];
  return JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8'));
}
function writeOrders(orders) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { items, customer_email, success_url, cancel_url } = req.body;
    const line_items = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.price_data.product_data.name,
          description: item.price_data.product_data.description,
          images: item.price_data.product_data.images,
        },
        unit_amount: item.price_data.unit_amount,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      customer_email,
      success_url,
      cancel_url,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/verify-payment', async (req, res) => {
  try {
    const { session_id } = req.query;
    const session = await stripe.checkout.sessions.retrieve(session_id);
    res.json({
      orderId: session.id,
      amount: session.amount_total,
      status: session.payment_status,
      email: session.customer_email,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para crear pedido y enviar correo de confirmación
app.post('/api/order', async (req, res) => {
  try {
    const { items, email, name } = req.body;
    if (!email || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }
    // Crear un ID único para el pedido
    const orderId = Date.now().toString(36) + Math.random().toString(36).slice(2);
    const total = items.reduce((sum, i) => sum + Number(i.price) * Number(i.quantity), 0);

    const order = {
      id: orderId,
      items,
      email,
      name: name || '',
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      total,
    };

    // Guardar pedido en local (JSON)
    const orders = readOrders();
    orders.push(order);
    writeOrders(orders);

    // Construir resumen en HTML y texto plano
    const itemsHtml = items.map(i => `
      <li>${i.name} (${i.presentation}) x${i.quantity} — €${Number(i.price).toFixed(2)} (línea: €${(Number(i.price) * Number(i.quantity)).toFixed(2)})</li>
    `).join('');
    const resumenHtml = `
      <h2>Resumen del pedido</h2>
      <p><strong>Cliente:</strong> ${name || ''} &lt;${email}&gt;</p>
      <ul>${itemsHtml}</ul>
      <p><strong>Total:</strong> €${total.toFixed(2)}</p>
      <p>Gracias por confiar en Deterín.</p>
    `;
    const itemsText = items.map(i => `- ${i.name} (${i.presentation}) x${i.quantity}: €${(Number(i.price) * Number(i.quantity)).toFixed(2)}`).join('\n');
    const resumenText = `Cliente: ${name || ''} <${email}>\n\n${itemsText}\n\nTotal: €${total.toFixed(2)}`;

    const fromAddr = `Deterín <${process.env.GMAIL_USER}>`;
    const salesAddr = process.env.ORDER_RECEIVER || 'Deterin@deterin.com';

    // Enviar al cliente
    await transporter.sendMail({
      from: fromAddr,
      to: email,
      subject: 'Hemos recibido tu pedido en Deterín',
      text: `Gracias por tu pedido.\n\n${resumenText}`,
      html: `<p>Gracias por tu pedido.</p>${resumenHtml}`
    });

    // Enviar al vendedor (Deterín)
    await transporter.sendMail({
      from: fromAddr,
      to: salesAddr,
      subject: `Nuevo pedido (${orderId}) de ${name || email}`,
      text: resumenText,
      html: resumenHtml
    });

    res.json({ success: true, orderId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para confirmar pedido y enviar resumen a usuario y vendedor
app.post('/api/confirm-order', async (req, res) => {
  try {
    const { orderId } = req.body;
    if (!orderId) return res.status(400).json({ error: 'Falta orderId' });
    const orders = readOrders();
    const order = orders.find(o => o.id === orderId);
    if (!order) return res.status(404).json({ error: 'Pedido no encontrado' });
    if (order.status === 'confirmed') return res.json({ success: true });
    order.status = 'confirmed';
    writeOrders(orders);

    // Preparar resumen de pedido
    const itemsHtml = order.items.map(item =>
      `<li>${item.name} (${item.presentation}) x${item.quantity} - €${item.price.toFixed(2)}</li>`
    ).join('');
    const resumen = `<h2>Resumen de tu pedido</h2><ul>${itemsHtml}</ul>`;

    // Enviar al usuario
    await transporter.sendMail({
      from: `Deterín <${process.env.GMAIL_USER}>`,
      to: order.email,
      subject: 'Pedido confirmado en Deterín',
      html: resumen
    });
    // Enviar al vendedor
    await transporter.sendMail({
      from: `Deterín <${process.env.GMAIL_USER}>`,
      to: 'Deterin@deterin.com',
      subject: `Nuevo pedido confirmado de ${order.email}`,
      html: resumen
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
}); 