const { Ticket } = require("../../db");

const getAllTicketsController = async () => {
  try {
    return await Ticket.findAll();
  } catch (error) {
    throw error;
  }
};

module.exports = getAllTicketsController;
