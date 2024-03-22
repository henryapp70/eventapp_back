const { User, Event, Event_Sponsor } = require("../../db");

const deleteEventController = async (idUser, idEvent) => {
  try {
    const event = await Event.findByPk(idEvent);
    if (!event) {
      return { success: false, msg: "Event not found!" };
    }

    const user = await User.findByPk(idUser);
    if (!user) {
      return { success: false, msg: "User not found!" };
    }

    if (user.id_user === event.id_user || user.type_user === "admin") {
      // Delete event from Event model
      await event.destroy();

      // Delete associated records from Event_Sponsor model
      await Event_Sponsor.destroy({ where: { id_event: idEvent } });

      return {
        success: true,
        msg: "Event and associated records deleted successfully",
      };
    } else {
      return {
        success: false,
        msg: "You do not have permission to delete this event",
      };
    }
  } catch (error) {
    console.error("Error deleting event:", error);
    return { success: false, msg: "Internal server error" };
  }
};

module.exports = deleteEventController;