const { Router } = require("express");
const router = Router();
const registerEventHandler = require("../handlers/eventHandler/registerEventHandler");
const deleteOneEventHandler = require("../handlers/eventHandler/deleteOneEventHandler");
const getAllEventsHandler = require("../handlers/eventHandler/getAllEventsHandler");
const updateOneEventHandler = require("../handlers/eventHandler/updateOneEventHandler");

router.route("/getallevents").get(getAllEventsHandler);
router.route("/registerevent").post(registerEventHandler);
router.route("/updateevent/:id").put(updateOneEventHandler);
router.route("/deleteevent/:id").delete(deleteOneEventHandler);

module.exports = router;
