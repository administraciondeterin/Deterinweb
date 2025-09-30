# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/96cc2505-8166-44b6-80e6-fba1c8a01633

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/96cc2505-8166-44b6-80e6-fba1c8a01633) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/96cc2505-8166-44b6-80e6-fba1c8a01633) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# Backend Deterín - Configuración y Uso

## Requisitos
- Node.js >= 16
- Cuenta de Gmail (para envío de correos)

## Instalación

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido (ajusta los valores):
   ```env
   # Stripe
   VITE_STRIPE_SECRET_KEY=sk_test_...
   # Gmail para envío de correos
   GMAIL_USER=tu_cuenta@gmail.com
   GMAIL_PASS=tu_contraseña_o_app_password
   # URL del frontend (para enlaces de confirmación)
   FRONTEND_URL=http://localhost:5173
   # Puerto del backend (opcional)
   PORT=3001
   ```
   > **Nota:** Si usas autenticación en dos pasos en Gmail, debes crear una "contraseña de aplicación" desde la configuración de seguridad de tu cuenta de Google.

3. Inicia el servidor backend:
   ```bash
   node server.js
   ```
   El backend escuchará por defecto en `http://localhost:3001`.

## Endpoints principales

- `POST /api/order` — Crea un pedido, lo guarda en local y envía un correo de confirmación al usuario.
- `POST /api/confirm-order` — Confirma el pedido (usado desde el enlace del correo) y envía el resumen tanto al usuario como a Deterin@deterin.com.

## Notas
- Los pedidos se almacenan en el archivo `orders.json` en la raíz del proyecto.
- El backend también incluye endpoints para Stripe Checkout si deseas pagos online.

---
¿Dudas? Contacta a soporte técnico de Deterín.
