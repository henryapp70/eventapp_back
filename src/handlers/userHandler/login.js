const {User} = require ("../../db.js")

const login = async (req,res) =>{
  try{
    const {email, password} = req.body;
    if( email && password ){
        const actualUser = await User.findOne({
            where: { email: email }
        })
        if(actualUser){
            if(actualUser.status === false){
                return res.status(403).send("User Banned, please contact with your admin")
            }
            if(actualUser.password === password){
                return res.json({
                    access:true,
                    id_user:actualUser.id_user,
                    name:actualUser.name,
                    email:actualUser.email,
                    password:actualUser.password,
                    type_user:actualUser.type_user,
                    status:actualUser.status,
                    image:actualUser.image,
                    id_user:actualUser.id
                })
            }
            return res.status(403).send("Incorrect password")
        }
        return res.status(404).send("User doesnt exist")
    }
    return res.status(400).send("Please complete your email and password")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = login;