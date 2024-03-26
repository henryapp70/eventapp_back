const { User } = require("../../db");

const getOneUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id_user: id } });
    if (!user) {
      return res.status(200).json({ msg: `there is no user with id ${id}` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = getOneUserHandler;
