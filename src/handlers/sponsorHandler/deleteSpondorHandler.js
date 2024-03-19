const deleteSponsorHandler = (req, res) => {
  const { id } = req.params;
  res.json({ msg: "deleteSponsorHandler working","delete sponsor with id": id });
};
module.exports = deleteSponsorHandler;
