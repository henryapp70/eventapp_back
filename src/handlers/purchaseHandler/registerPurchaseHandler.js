const { Purchase, Ticket, User } = require("../../db");

const registerPurchaseHandler = async (req, res) => {
  const { idUser, idTicket } = req.params;
  const { quantity } = req.body;
  try {
    const user = await User.findOne({ where: { id_user: idUser } });
    if (!user) {
      return res.status(400).json({ msg: "Non-existent user" });
    }
    const ticket = await Ticket.findOne({ where: { id_ticket: idTicket } });
    if (!ticket) {
      return res.status(400).json({ msg: "Non-existent ticket" });
    }
    const purchase = await Purchase.create({
      quantity,
      id_user: idUser,
      id_ticket: idTicket,
    });
    res.status(200).json(purchase);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = registerPurchaseHandler;
