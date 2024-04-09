const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { Purchase } = require('../../db')
const createSession = async (req, res) => {
  try {
    const { eventName, eventPrice } = req.body; // Obtener el nombre y el precio del evento desde el cuerpo de la solicitud
    // Recibiría id_ticket, id_user, quantity_tickests
    // Crear la sesión de pago en Stripe con los datos del evento
    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: eventName, // Usar el nombre del evento como nombre del producto en Stripe
          },
          unit_amount: eventPrice * 100, // Convertir el precio a centavos (Stripe utiliza el valor en centavos)
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'http://localhost:5000/api/v1/payment/success',
      cancel_url: 'http://localhost:5000/api/v1/payment/cancel',
    });
        
    // Devolver el ID de la sesión de pago creada
    return session;
  } catch (error) {
    // Manejar errores
    console.error("Error creating payment session:", error);
    throw error;
  }
};

module.exports = { createSession };


// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const createSession = async (req, res) => {
//   try {
//     // Aquí puedes agregar la lógica para crear una sesión de pago con Stripe
//     const session = await stripe.checkout.sessions.create({
//       // Configuración de la sesión de pago
//       line_items: [{
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Tech-event 2024',
//           },
//           unit_amount: 2000, // Corrección: cambiar 'amount' a 'unit_amount'
//         },
//         quantity: 1,
//         }
//       ],
//       mode: 'payment',
//       success_url: 'http://localhost:5000/api/v1/payment/success',
//       cancel_url: 'http://localhost:5000/api/v1/payment/cancel',
//     });

//     // Devuelve el ID de la sesión de pago creada
//     return session;
//   } catch (error) {
//     // En caso de error, maneja el error apropiadamente
//     console.error("Error creating payment session:", error);
//     throw error; // Lanza el error para que sea capturado por el manejador correspondiente
//   }
// };

// module.exports = { createSession };

