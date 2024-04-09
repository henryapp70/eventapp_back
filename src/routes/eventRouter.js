const { Router } = require("express");
const router = Router();
const registerEventHandler = require("../handlers/eventHandler/registerEventHandler");
const deleteEventHandler = require("../handlers/eventHandler/deleteEventHandler");
const getAllEventsHandler = require("../handlers/eventHandler/getAllEventsHandler");
const updateEventHandler = require("../handlers/eventHandler/updateEventHandler");
const updateEventStatusHandler = require("../handlers/eventHandler/updateEventStatusHandler");
const getEventHandler = require("../handlers/eventHandler/getEventHandler");
const uploadSingleImage = require("../middlewares/uploadSingleImage");

router.route("/getallevents").get(getAllEventsHandler);
router.route("/getallevents/:id").get(getEventHandler);
router.route("/registerevent/:id").post(uploadSingleImage,registerEventHandler);
router.route("/updateevent/:idUser/:idEvent").put(updateEventHandler);
router.route("/updateevent/:idUser/:idEvent/:status").put(updateEventStatusHandler);
router.route("/deleteevent/:idUser/:idEvent").delete(deleteEventHandler);

module.exports = router;
