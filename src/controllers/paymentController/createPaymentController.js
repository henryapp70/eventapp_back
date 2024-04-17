const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { Purchase, Event, Ticket } = require("../../db");
const createSession = async (req, res) => {
  try {
    // const { eventName, eventPrice } = req.body; // Obtener el nombre y el precio del evento desde el cuerpo de la solicitud
    const { id_ticket, id_user, quantity } = req.body;
    // Crear la sesión de pago en Stripe con los datos del evento
    const ticket = await Ticket.findOne({ where: { id_ticket } });
    const event = await Event.findOne({ where: { id_event: ticket.id_event } });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: event.name, // Usar el nombre del evento como nombre del producto en Stripe
            },
            unit_amount: ticket.price * 100, // Convertir el precio a centavos (Stripe utiliza el valor en centavos)
          },
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/#/succes",
      cancel_url: "http://localhost:5173/api/v1/payment/#/cart",
    });

    const purchaseDetails = {
      id_user,
      quantity,
      id_ticket,
    };
    const purchase = await Purchase.create(purchaseDetails);

    // Devolver el ID de la sesión de pago creada
    return session;
  } catch (error) {
    // Manejar errores
    console.error("Error creating payment session:", error);
    throw error;
  }
};

module.exports = { createSession };
