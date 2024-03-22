const { User, Event, Event_Sponsor, Sponsor } = require("../../db");

const updateEventController = async (idUser, idEvent, eventData) => {
  try {
    const user = await User.findByPk(idUser);
    if (!user) {
      return { success: false, msg: "User not found" };
    }

    let event = await Event.findByPk(idEvent);
    if (!event) {
      return { success: false, msg: "Event not found" };
    }

    if (user.id_user === event.id_user || user.type_user === "admin") {
      event = await event.update(eventData);

      // Remove all existing sponsors associated with the event
      await Event_Sponsor.destroy({ where: { id_event: event.id_event } });

      // Add new sponsors to the event
      if (eventData.sponsors && eventData.sponsors.length > 0) {
        for (const sponsorId of eventData.sponsors) {
          const sponsor = await Sponsor.findByPk(sponsorId);
          if (sponsor) {
            await event.addSponsor(sponsor);
          }
        }
      }

      return { success: true, event, msg: "Event updated successfully" };
    } else {
      return { success: false, msg: "You cannot update this event" };
    }
  } catch (error) {
    console.error("Error updating event:", error);
    return { success: false, msg: "Internal server error" };
  }
};

module.exports = updateEventController;
