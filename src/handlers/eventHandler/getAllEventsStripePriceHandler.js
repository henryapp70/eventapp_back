const { Event } = require("../../db");

const getAllEventsStripePriceHandler = async (req, res) => {
  try {
    const events = await Event.findAll();
    if (!events.length) {
      return res.status(200).json({ message: "No events found." }); // Informative message
    }
    const mappedPrices = events.map((events) => {
      return {
        id_event: events.id_event,
        price: events.price,
      };
    });
    res.status(200).json(mappedPrices);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Error fetching events" });
  }
};

module.exports = getAllEventsStripePriceHandler;
