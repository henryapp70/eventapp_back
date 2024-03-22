const { Ticket } = require("../../db");

const getOneTicketController = async (id) => {
  try {
    return await Ticket.findByPk(id);
  } catch (error) {
    throw error;
  }
};

module.exports = getOneTicketController;
