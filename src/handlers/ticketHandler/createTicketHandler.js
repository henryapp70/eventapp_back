const { Ticket, Event } = require("../../db");

const createTicketHandler = async (req, res) => {
  const { id } = req.params;
  const { ticket_type, price, available_quantity, sell_by_date } = req.body;

  try {
    const event = await Event.findByPk(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const ticket = await Ticket.create({
      ticket_type,
      price,
      available_quantity,
      sell_by_date,
      id_event: event.id_event,
    });

    res.status(201).json(ticket);
    // res.json(event);
  } catch (error) {
    console.error("Error creating ticket:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = createTicketHandler;
