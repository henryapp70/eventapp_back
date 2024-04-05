const {User} = require ("../../db.js")

const getAllUsersHandler = async (req, res) => {


  try{
    const users = await User.findAll();
    const allUsers = users.map(
      ({id_user, name, email, password, type_user, status, image})=>
      ({id_user, name, email, password, type_user, status, image})
    )
    return allUsers.length > 0 ? res.json(allUsers) : res.status(404).send("Not Found")
  }
  catch(error){
  res.status(500).send(error.message)
  }
};
module.exports = getAllUsersHandler;
