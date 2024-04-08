const { Event } = require("../../db");

const updateEventStatusHandler = async (req, res) => {
  const { idUser, idEvent, status } = req.params;
  try {
    // Find the event to update
    const event = await Event.findByPk(idEvent);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Update the status attribute using sequelize
    event.status = status;
    event.id_user = idUser;
    await event.save();
    res.json(event)

    // return res.json({ message: "Event status updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateEventStatusHandler;
