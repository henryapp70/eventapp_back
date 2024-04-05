const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createSession = async (req, res) => {
  try {
    // Aquí puedes agregar la lógica para crear una sesión de pago con Stripe
    const session = await stripe.checkout.sessions.create({
      // Configuración de la sesión de pago
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Tech-event 2024',
          },
          unit_amount: 2000, // Corrección: cambiar 'amount' a 'unit_amount'
        },
        quantity: 1,
        }
      ],
      mode: 'payment',
      success_url: 'http://localhost:5000/api/v1/payment/success',
      cancel_url: 'http://localhost:5000/api/v1/payment/cancel',
    });

    // Devuelve el ID de la sesión de pago creada
    return session;
  } catch (error) {
    // En caso de error, maneja el error apropiadamente
    console.error("Error creating payment session:", error);
    throw error; // Lanza el error para que sea capturado por el manejador correspondiente
  }
};

module.exports = { createSession };

