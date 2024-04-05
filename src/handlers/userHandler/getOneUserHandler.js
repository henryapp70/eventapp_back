const { User } = require("../../db.js");

const getOneUserHandler = async (req, res) => {
  try {
    const oneUserDB = await User.findByPk(req.params.id);
    const oneUser = {
      id_user: oneUserDB.id_user,
      name: oneUserDB.name,
      email: oneUserDB.email,
      password: oneUserDB.password,
      type_user: oneUserDB.type_user,
      status: oneUserDB.status,
      image: oneUserDB.image
    };
    return res.status(200).json(oneUser);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = getOneUserHandler;
