const getAllTicketsController = require("../../controllers/ticketController/getAllTicketsController");

const getAllTicketsHandler = async (req, res) => {
  try {
    const tickets = await getAllTicketsController();
    if (!tickets || tickets.length === 0) {
      return res.status(404).json({ message: "No tickets found" });
    }
    res.json(tickets);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getAllTicketsHandler;