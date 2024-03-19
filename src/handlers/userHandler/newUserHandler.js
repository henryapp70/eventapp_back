const { User } = require("../../db.js");

const newUserHandler = async (req, res) => {
    try{
    const { name, email, password, interests} = req.body;
    if(name && email && password, interests){
        const newUser = await User.findOrCreate({
            where: { name, email, password, interests }
        })
        return res.json(newUser)
    }
    return res.status(400).send("Datos incorrectos")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = newUserHandler;