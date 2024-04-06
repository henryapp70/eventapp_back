require("dotenv").config()
const { User } = require("../../db.js");
const {Resend} = require("resend")

const { RESEND_API_KEY } = process.env
const resend = new Resend(RESEND_API_KEY);

const sendEmail = async (email) => {

  
  const { data, error } = await resend.emails.send({
    from: 'EventApp <onboarding@resend.dev>',
    to: [email],
    subject: 'Welcome to EventApp',
    html: '<strong>you have registered a new user successfuly!.</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};


const register = async (req, res) => {
    try{
    const { name, email, password, image} = req.body;
    if(name && email && password, image){
        const newUser = await User.findOrCreate({
            where: { name, email, password, image }
        })
        sendEmail(email)
        return res.json(newUser)
    }
    return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = register;