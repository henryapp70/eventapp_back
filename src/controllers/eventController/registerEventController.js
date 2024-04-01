const { Event, Sponsor, User } = require("../../db");

const registerEventController = async (userId, eventData, imageURL) => {
  console.log(imageURL)
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return { success: false, msg: "User not found" };
    }

    if (user.type_user !== "admin") {
      return { success: false, msg: "You cannot register an event" };
    }

    const event = await Event.create({
      ...eventData,
      image:[imageURL],
      id_user: userId,
    });

    if (eventData.sponsors && eventData.sponsors.length > 0) {
      for (const sponsorId of eventData.sponsors) {
        const sponsor = await Sponsor.findByPk(sponsorId);
        if (sponsor) {
          await event.addSponsor(sponsor);
        }
      }
    }

    return { success: true, event, msg: "Event created successfully" };
  } catch (error) {
    console.error("Error registering event:", error);
    return { success: false, msg: "Internal server error" };
  }
};

module.exports = registerEventController;
