const logoutHandler = (req, res) => {
  res.json({ msg: "you are logged out!" });
};

module.exports = logoutHandler;
