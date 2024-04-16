const { Purchase, Event,Ticket } = require("../../db"); // Include both models

const getEventsFromUsersHandler = async (req, res) => {
  const { idUser } = req.params;

  try {
    // Retrieve purchases for the user
    const purchases = await Purchase.findAll({
      where: { id_user: idUser },
    });

    // Check if any purchases were found
    if (!purchases.length) {
      return res
        .status(404)
        .json({ message: "No purchases found for this user." });
    }

    // Fetch event data for each purchase (using eager loading)
    const tickets = await Promise.all(
      purchases.map(async (purchase) => {
        return await Ticket.findByPk(purchase.id_ticket); // Assuming id_ticket references Event
      })
    );

    // Filter out potential null values from tickets (optional)
    const filteredEvents = tickets.filter((ticket) => ticket !== null); // Handle cases where tickets might not have corresponding tickets

    const events = await Promise.all(
      tickets.map(async (ticket) => {
        return await Event.findByPk(ticket.id_event);
      })
    )
    res.status(200).json(events); // Return retrieved tickets
  } catch (error) {
    console.error("Error retrieving events for user:", error);
    res.status(500).json({ message: "Internal server error" }); // Generic error message for security
  }
};

module.exports = getEventsFromUsersHandler;
