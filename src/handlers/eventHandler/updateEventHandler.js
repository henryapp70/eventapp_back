const { User, Event, Event_Sponsor, Sponsor } = require("../../db");

const updateEventHandler = async (req, res) => {
  console.log("LLego aquí");
  const { idUser, idEvent } = req.params;
  const {
    name,
    description,
    start_date,
    end_date,
    start_hour,
    end_hour,
    event_type,
    location,
    image,
    access,
    sponsors,
  } = req.body;

  try {
    const user = await User.findByPk(idUser);
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    let event = await Event.findByPk(idEvent);
    if (!event) {
      return res.status(404).json({ msg: "Event not found" });
    }

    if (user.id_user === event.id_event || user.type_user === "admin") {
      // Update event details
      event = await event.update({
        name,
        description,
        start_date,
        end_date,
        start_hour,
        end_hour,
        event_type,
        location,
        image,
        access,
      });

      // Remove all existing sponsors associated with the event
      await Event_Sponsor.destroy({ where: { id_event: event.id_event } });

      // Add new sponsors to the event
      if (sponsors && sponsors.length > 0) {
        for (const sponsorId of sponsors) {
          const sponsor = await Sponsor.findByPk(sponsorId);
          if (sponsor) {
            await event.addSponsor(sponsor);
          }
        }
      }

      res.status(200).json({ event, msg: "Event updated successfully" });
    } else {
      return res.status(400).json({ msg: "You cannot update an event" });
    }
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = updateEventHandler;
