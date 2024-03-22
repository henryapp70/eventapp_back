const getAllEventsController = require("../../controllers/eventController/getAllEventsController");

const getAllEventsHandler = async (req, res) => {
  try {
    const events = await getAllEventsController();
    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No events found" });
    }
    // res.json(events);
    res.json({ id });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getAllEventsHandler;
