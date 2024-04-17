const { Router } = require("express");
const router = Router();
const createReviewHandler = require("../handlers/ratingHandler/createReviewHandler");
const getReviewsHandler = require("../handlers/ratingHandler/getReviewsHandler")
const getEventsFromUsersHandler = require("../handlers/ratingHandler/getEventsFromUsersHandler")
const getReviewsFromUserHandler = require("../handlers/ratingHandler/getReviewsFromUserHandler");

router.route("/event/review/:idEvent").get(getReviewsHandler);
router.route("/event/review/:idEvent/:idUser").get(getReviewsFromUserHandler);
router.route("/ticket/event/review/:idUser").get(getEventsFromUsersHandler);
router.route("/event/review").post(createReviewHandler);

module.exports = router;
