const { Participation } = require("../db");

async function populateParticipation() {
  try {
    const participations = await Participation.bulkCreate([
      {
        register_date: "2024-08-15",
        status: false,
        id_user: 1,
        id_event: 2,
      },
      {
        register_date: "2025-09-16",
        status: true,
        id_user: 2,
        id_event: 1,
      },
      {
        register_date: "2024-10-20",
        status: true,
        id_user: 3,
        id_event: 3,
      },
      {
        register_date: "2024-11-25",
        status: false,
        id_user: 2,
        id_event: 2,
      },
      {
        register_date: "2025-01-10",
        status: true,
        id_user: 1,
        id_event: 3,
      },
    ]);

    console.log("Participation table populated successfully");
  } catch (error) {
    console.error("Error populating Participation table:", error);
  }
}

module.exports = populateParticipation;
