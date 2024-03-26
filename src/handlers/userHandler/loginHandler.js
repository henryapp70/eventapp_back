const { User } = require("../../db");

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({ msg: "user not registered!" });
    }
    if (user.password !== password) {
      return res.status(400).json({ msg: "Invalid password!" });
    }
    // I think we need to generate some sort of token somewhere around here

    res.status(200).json({ user, msg: "you are logged in!" });
  } catch (error) {
    res.json({ msg: error });
  }
};

module.exports = loginHandler;
