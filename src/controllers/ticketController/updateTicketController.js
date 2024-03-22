const { Ticket } = require("../../db");

const updateTicketController = async (id, ticketData) => {
  try {
    const ticket = await Ticket.findByPk(id);

    if (!ticket) {
      return null;
    }

    await ticket.update(ticketData);
    return ticket;
  } catch (error) {
    throw error;
  }
};

module.exports = updateTicketController;
