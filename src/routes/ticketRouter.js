const { Router } = require("express");
const router = Router();
const getTicketsToEventHandler = require("../handlers/ticketHandler/getTicketsToEventHandler");
const createTicketHandler = require("../handlers/ticketHandler/createTicketHandler");
const getAllTicketsHandler = require("../handlers/ticketHandler/getAllTicketsHandler");
const getOneTicketHandler = require("../handlers/ticketHandler/getOneTicketHandler");
const updateTicketHandler = require("../handlers/ticketHandler/updateTicketHandler");

router.route("/getticketstoevent/:idEvent").get(getTicketsToEventHandler);
router.route("/getalltickets").get(getAllTicketsHandler);
router.route("/getalltickets/:id").get(getOneTicketHandler);
router.route("/createticket/:id").post(createTicketHandler);
router.route("/updateticket/:id").put(updateTicketHandler);

module.exports = router;
