const updateTicketController = require("../../controllers/ticketController/updateTicketController");
const updateTicketHandler = async (req, res) => {
  const { id } = req.params;
  const { ticket_type, price, available_quantity, sell_by_date, price_cat} = req.body;

  try {
    const ticket = await updateTicketController(id, {
      ticket_type,
      price,
      available_quantity,
      sell_by_date,
      price_cat
    });

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.json(ticket);
  } catch (error) {
    console.error("Error updating ticket:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = updateTicketHandler;
