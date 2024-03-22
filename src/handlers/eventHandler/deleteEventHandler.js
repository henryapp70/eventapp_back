const { User, Event, Event_Sponsor } = require("../../db");

const deleteEventHandler = async (req, res) => {
  const { idUser, idEvent } = req.params;
  try {
    const event = await Event.findByPk(idEvent);
    if (!event) {
      return res.json({ msg: "Event not found!" });
    }

    const user = await User.findByPk(idUser);
    if (!user) {
      return res.json({ msg: "User not found!" });
    }

    if (user.id_user === event.id_user || user.type_user === "admin") {
      // Delete event from Event model
      await event.destroy();

      // Delete associated records from Event_Sponsor model
      await Event_Sponsor.destroy({ where: { id_event: idEvent } });

      return res.json({
        msg: "Event and associated records deleted successfully",
      });
    } else {
      return res
        .status(403)
        .json({ msg: "You do not have permission to delete this event" });
    }
  } catch (error) {
    console.error("Error deleting event:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = deleteEventHandler;
