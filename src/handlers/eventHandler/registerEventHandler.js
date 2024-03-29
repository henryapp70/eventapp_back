const registerEventController = require("../../controllers/eventController/registerEventController");

const registerEventHandler = async (req, res) => {
  const { id } = req.params;
  const eventData = req.body;

  const { success, event, msg } = await registerEventController(id, eventData);

  if (success) {
    res.status(200).json({ event, msg });
  } else {
    res.status(400).json({ msg });
  }
};

module.exports = registerEventHandler;





// const { Event, Sponsor, User } = require("../../db");

// const registerEventHandler = async (req, res) => {
//   const { id } = req.params;
//   const {
//     name,
//     description,
//     start_date,
//     end_date,
//     start_hour,
//     end_hour,
//     event_type,
//     location,
//     image,
//     access,
//     sponsors,
//   } = req.body;
//   try {
//     const user = await User.findByPk(id);
//     if (!user) {
//       return res.status(400).json({ msg: "user not found" });
//     }
//     if (user.type_user !== "admin") {
//       return res.status(400).json({ msg: "you cannot register an event" });
//     }
//     const event = await Event.create({
//       name,
//       description,
//       start_date,
//       end_date,
//       start_hour,
//       end_hour,
//       event_type,
//       location,
//       image,
//       access,
//       id_user: id,
//     });

//     // right here maybe we need to check the sponsors
//     // at the moment i am not doing that

//     if (sponsors && sponsors.length > 0) {
//       for (const sponsorId of sponsors) {
//         const sponsor = await Sponsor.findByPk(sponsorId);
//         if (sponsor) {
//           await event.addSponsor(sponsor);
//         }
//       }
//     }

//     // console.log(event instanceof Event);
//     // console.log(event);
//     res.status(200).json({ event, msg: "Event created successfully!" });
//   } catch (error) {
//     console.error("Error registering event:", error);
//     res.status(500).json({ msg: "Internal server error" });
//   }
// };

// module.exports = registerEventHandler;
