require("dotenv").config()
const {Resend} = require("resend")

const { RESEND_API_KEY } = process.env
const resend = new Resend(RESEND_API_KEY);

const sendEmail = async (req, res) => {
const {email} = req.body
  
  const { data, error } = await resend.emails.send({
    from: 'EventApp <onboarding@resend.dev>',
    to: [email],
    subject: 'Welcome to EventApp',
    html: '<strong>you have registered a new user successfuly!.</strong>',
  });
  res.json(data)
  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};



module.exports = sendEmail
