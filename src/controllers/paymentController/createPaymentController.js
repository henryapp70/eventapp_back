const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { Purchase, Event, Ticket, User } = require("../../db");
const nodemailer = require("nodemailer");
const fs = require("fs");
const handlebars = require("handlebars")
const {GOOGLE_KEY} = process.env;
require("dotenv").config();

const createSession = async (req, res) => {
  try {
    // const { eventName, eventPrice } = req.body; // Obtener el nombre y el precio del evento desde el cuerpo de la solicitud
    const { id_ticket, id_user, quantity } = req.body;
    // Crear la sesión de pago en Stripe con los datos del evento
    const ticket = await Ticket.findOne({ where: { id_ticket } });
    const event = await Event.findOne({ where: { id_event: ticket.id_event } });
    const user = await User.findOne({ where: {id_user}});


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
      cancel_url: "http://localhost:5173/api/v1/payment/#/purchase",
    });

    const purchaseDetails = {
      id_user,
      quantity,
      id_ticket,
    };
    const purchase = await Purchase.create(purchaseDetails);
// agregar la notificacion por mail

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "eventapphenry@gmail.com",
    pass: GOOGLE_KEY,
  },
});
async function sendEmail(email = user.email, name = user.name, eName = event.name,
eDate = event.start_date, quantity = purchaseDetails.quantity, price = ticket.price) {
  const source = fs.readFileSync('src/utils/paymentEmailTemplate.html', 'utf-8').toString();
  const template = handlebars.compile(source);
  const totalPrice = quantity*price
  const replacements = {
    username: name,
    eventName: eName,
    eventDate: eDate,
    tickets: quantity,
    ticketPrice: totalPrice

  };
  const htmlToSend = template(replacements);
  
  const info = await transporter.sendMail({
    from: '"eventApp" <eventapp@gmail.com>',
    to: email,
    subject: `Hello ${name}`, 
    text: "Thank you for your purchase!",
    html: htmlToSend
  });

  console.log("Message sent: %s", info.messageId);
}
sendEmail();


    // Devolver el ID de la sesión de pago creada
    return session;
  } catch (error) {
    // Manejar errores
    console.error("Error creating payment session:", error);
    throw error;
  }
};

module.exports = { createSession };
