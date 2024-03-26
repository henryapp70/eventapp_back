const getEventController = require("../../controllers/eventController/getEventController");

const getEventHandler = async (req, res) => {
  const { id } = req.params;
  const { success, event, msg } = await getEventController(id);
  if (success) {
    res.status(200).json(event);
  } else {
    res.status(404).json({ message: msg });
  }
};

module.exports = getEventHandler;

