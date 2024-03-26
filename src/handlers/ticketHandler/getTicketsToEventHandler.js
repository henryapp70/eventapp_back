const { Ticket, Event } = require("../../db");

const getTicketsToEventHandler = async (req, res) => {
  const { idEvent } = req.params;
  try {
    const event = await Event.findByPk(idEvent);
    if (!event) {
      res.status(400).json({ msg: `There is no event with id ${idEvent}` });
    }
    const tickets = await Ticket.findAll({ where: { id_event: idEvent } });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = getTicketsToEventHandler;
