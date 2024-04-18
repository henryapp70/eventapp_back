const { Event, Event_Sponsor, User } = require("../../db");

const registerEventController = async (eventData) => {
  console.log("eventData.image---->",eventData.image)
  console.log("eventData.id_user-->",eventData.id_user)
  try {
    const user = await User.findByPk(eventData.id_user);
    if (!user) {
      return { success: false, msg: "User not found" };
    }

    if (user.type_user !== "admin") {
      return { success: false, msg: "You cannot register an event" };
    }

    const event = await Event.create({
      ...eventData,
    });
    const id_event=event.dataValues.id_event
    console.log('event--->', event.dataValues);
    console.log('id_event--->', id_event);
    console.log('evenData--->', eventData);
    if (eventData.sponsor.length > 0) {
      await Event_Sponsor.create({
        id_event   : id_event,
        id_sponsor : eventData.sponsor[0]
      });
      if(eventData.sponsor[1]){
        await Event_Sponsor.create({
          id_event   : id_event,
          id_sponsor : eventData.sponsor[1]
        });
      }
      if(eventData.sponsor[2]){
        await Event_Sponsor.create({
          id_event   : id_event,
          id_sponsor : eventData.sponsor[2]
        });
      }
    }

    return { success: true, event, msg: "Event created successfully" };
  } catch (error) {
    console.error("Error registering event:", error);
    return { success: false, msg: "Internal server error" };
  }
};

module.exports = registerEventController;
