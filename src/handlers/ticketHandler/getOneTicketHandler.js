const getOneTicketController = require("../../controllers/ticketController/getOneTicketController");

const getOneTicketHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const ticket = await getOneTicketController(id);

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.json(ticket);
  } catch (error) {
    console.error("Error fetching ticket:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = getOneTicketHandler;
