require("dotenv").config()
const { User } = require("../../db.js");
const nodemailer = require("nodemailer");
const fs = require("fs");
const handlebars = require("handlebars")
const {GOOGLE_KEY} = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "eventapphenry@gmail.com",
    pass: GOOGLE_KEY,
  },
});


async function sendEmail(email, name) {
  const source = fs.readFileSync('src/utils/registerEmailTemplate.html', 'utf-8').toString();
  const template = handlebars.compile(source);
  const replacements = {
    username: name,
  };
  const htmlToSend = template(replacements);
  
  const info = await transporter.sendMail({
    from: '"eventApp" <eventapp@gmail.com>',
    to: email,
    subject: `Hello ${name}`, 
    text: "Welcome to eventApp",
    html: htmlToSend
  });

  console.log("Message sent: %s", info.messageId);
  
}

const register = async (req, res) => {
    try{
    const { name, email, password, image} = req.body;
    if(name && email && password, image){
        const newUser = await User.findOrCreate({
            where: { name, email, password, image }
        })
        sendEmail(email, name)
        return res.json(newUser)
    }
    return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = register;