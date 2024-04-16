const {User} = require ("../../db.js");
const changeTypeUser = async (req,res) =>{
    try {
        const {id_user, type_user} = req.params
        const userData = {
            type_user: "user" 
        }
        const adminData = {
            type_user: "admin"
        }

        if(type_user==="user"){
            const result = await User.update(userData, {where: {
                id_user: id_user}})
            if (result[0] > 0) {
                res.json({
                    type_user: "user"})
                console.log(`Usuario actualizado correctamente: ${id_user}`);
                return true;
            } else {
                console.log(`No se encontró ningún usuario con el ID: ${id_user}`);
                return false;
            }
        }
        if(type_user==="admin"){
            const result = await User.update(adminData,{where:{
                id_user: id_user}})
            if (result[0] > 0) {
                res.json({
                    type_user: "admin"})
                console.log(`Usuario actualizado correctamente: ${id_user}`);
                return true;
            } else {
                console.log(`No se encontró ningún usuario con el ID: ${id_user}`);
                return false;
                }
            
        }


    } catch (error) {
        res.status(404).send(error)        
        }
}
module.exports = changeTypeUser