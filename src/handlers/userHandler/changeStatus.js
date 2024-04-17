const {User} = require ("../../db.js");
const changeStatus = async (req,res) =>{
    try {
        const {id_user, status} = req.params
        const falseData = {
            status: false
        }
        const trueData = {
            status: true
        }

        if(status==="false"){
            const result = await User.update(falseData, {where: {
                id_user: id_user}})
            if (result[0] > 0) {
                res.json({
                    status: "Banned"})
                console.log(`Usuario actualizado correctamente: ${id_user}`);
                return true;
            } else {
                console.log(`No se encontró ningún usuario con el ID: ${id_user}`);
                return false;
            }
        }
        if(status==="true"){
            const result = await User.update(trueData,{where:{
                id_user: id_user}})
            if (result[0] > 0) {
                res.json({
                    status: "Active"})
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
module.exports = changeStatus