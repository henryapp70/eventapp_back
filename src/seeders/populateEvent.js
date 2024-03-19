const { Event } = require("../db");

async function populateEvent() {
  try {
    const events = await Event.bulkCreate([
      {
        name: "Tech Conference 2024",
        description:
          "Annual technology conference showcasing the latest innovations.",
        start_date: "2024-07-15",
        end_date: "2024-07-17",
        start_hour: "09:00:00",
        end_hour: "17:00:00",
        location: "Convention Center",
        event_type: "Conference",
      },
      {
        name: "Art Exhibition",
        description:
          "Exhibition featuring contemporary artworks from local artists.",
        start_date: "2024-08-20",
        end_date: "2024-08-25",
        start_hour: "10:00:00",
        end_hour: "18:00:00",
        location: "Art Gallery",
        event_type: "Exhibition",
      },
      {
        name: "Music Festival",
        description:
          "Annual music festival featuring performances by renowned artists.",
        start_date: "2024-09-10",
        end_date: "2024-09-12",
        start_hour: "16:00:00",
        end_hour: "23:00:00",
        location: "Outdoor Venue",
        event_type: "Festival",
      },
      {
        name: "Summer Jazz Fest",
        description:
          "A celebration of jazz music with performances by talented artists.",
        start_date: "2025-07-20",
        end_date: "2025-07-22",
        start_hour: "18:00:00",
        end_hour: "22:00:00",
        location: "City Park Amphitheater",
        event_type: "Music Festival",
      },
    ]);

    console.log("Event table populated successfully");
  } catch (error) {
    console.error("Error populating Event table:", error);
  }
}

module.exports = populateEvent;
