const getOneUsersHandler = (req, res) => {
  const { id } = req.params;
  res.json({ msg: "getOneUsersHandler working", "id user number": id });
};

module.exports = getOneUsersHandler;
