const { Event_Sponsor } = require("../db");

async function populateEvent_Sponsor() {
  try {
    const eventSponsors = await Event_Sponsor.bulkCreate([
      {
        id_event: 1,
        id_sponsor: 2,
      },
      {
        id_event: 2,
        id_sponsor: 1,
      },
      {
        id_event: 3,
        id_sponsor: 1,
      },
      {
        id_event: 1,
        id_sponsor: 3,
      },
    ]);

    console.log("Event_Sponsor table populated successfully");
  } catch (error) {
    console.error("Error populating Event_Sponsor table:", error);
  }
}

module.exports = populateEvent_Sponsor;
