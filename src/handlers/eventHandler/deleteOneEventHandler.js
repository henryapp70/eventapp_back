const deleteOneEventHandler = (req, res) => {
  const { id } = req.params
  res.json({
    msg: "deleteOneEventHandler working",
    "event to delete with id": id,
  });
};
module.exports = deleteOneEventHandler;