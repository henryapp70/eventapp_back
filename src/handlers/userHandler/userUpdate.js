const {User} = require ("../../db.js");
const userUpdate = async (req,res) =>{
    try {
        const {id_user} = req.params
        const {name, image} = req.body
        const fullData = {
            name: name,
            image: image
        }
        const nameData = {
            name: name
        }
        const imageData = {
            image: image
        }
     
        if(name && image){
            const result = await User.update(fullData, {where: {
                id_user: id_user}})
            if (result[0] > 0) {
                res.json({
                    status: "Name and image updated"})
                console.log(`Usuario actualizado correctamente: ${id_user}`);
                return true;
            } else {
                console.log(`No se encontró ningún usuario con el ID: ${id_user}`);
                return false;
            }
        }
        if(name && !image){
            const result = await User.update(nameData,{where:{
                id_user: id_user}})
            if (result[0] > 0) {
                res.json({
                    status: "Name updated"})
                console.log(`Usuario actualizado correctamente: ${id_user}`);
                return true;
            } else {
                console.log(`No se encontró ningún usuario con el ID: ${id_user}`);
                return false;
                }
            
        }
        if(!name && image){
            const result = await User.update(imageData,{where:{
                id_user: id_user}})
            if (result[0] > 0) {
                res.json({
                    status: "Image updated"})
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
module.exports = userUpdate