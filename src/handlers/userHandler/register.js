const { User } = require("../../db.js");

const register = async (req, res) => {
    try{
    const { name, email, password, image} = req.body;
    if(name && email && password, image){
        const newUser = await User.findOrCreate({
            where: { name, email, password, image }
        })
        return res.json(newUser)
    }
    return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = register;