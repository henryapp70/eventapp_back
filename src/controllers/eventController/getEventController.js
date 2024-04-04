const { Event, Ticket, Sponsor } = require("../../db");

const getEventController = async (id) => {
  try {
    const event = await Event.findByPk(id, {
      include: [Ticket, Sponsor], 
    });

    if (!event) {
      return { success: false, msg: "Event not found" };
    }

    return { success: true, event };
  } catch (error) {
    console.error("Error fetching event:", error);
    return { success: false, msg: "Internal server error" };
  }
};

module.exports = getEventController;
