const registerEventController = require("../../controllers/eventController/registerEventController");

const registerEventHandler = async (req, res) => {
    const eventData = req.body;
    console.log('eventData--->', eventData);
  
  const { success, event, msg } = await registerEventController(eventData);

  if (success) {
    res.status(200).json({ event, msg });
  } else {
    res.status(400).json({ msg });
  }
};

module.exports = registerEventHandler;