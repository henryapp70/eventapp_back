const updateOneEventHandler = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "updateOneEventHandler working",
    "event to update with id": id,
  });
};
module.exports = updateOneEventHandler;