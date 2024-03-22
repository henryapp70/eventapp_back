const deleteEventController = require("../../controllers/eventController/deleteEventController")

const deleteEventHandler = async (req, res) => {
  const { idUser, idEvent } = req.params;
  const { success, msg } = await deleteEventController(idUser, idEvent);
  if (success) {
    return res.status(200).json({ msg });
  } else {
    return res.status(403).json({ msg });
  }
};

module.exports = deleteEventHandler;
