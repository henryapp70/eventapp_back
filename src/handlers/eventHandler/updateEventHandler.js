const updateEventController = require("../../controllers/eventController/updateEventController")

const updateEventHandler = async (req, res) => {
  const { idUser, idEvent } = req.params;
  const eventData = req.body;

  const { success, event, msg } = await updateEventController(idUser, idEvent, eventData);

  if (success) {
    res.status(200).json({ event, msg });
  } else {
    res.status(400).json({ msg });
  }
};

module.exports = updateEventHandler;
