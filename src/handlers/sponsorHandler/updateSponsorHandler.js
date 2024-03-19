const updateSponsorHandler = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "updateSponsorHandler working",
    "update sponsor with id": id,
  });
};
module.exports = updateSponsorHandler;