const { Router } = require("express");
const router = Router();
const createReviewHandler = require("../handlers/ratingHandler/createReviewHandler");
const getReviewsHandler = require("../handlers/ratingHandler/getReviewsHandler")

router.route("/event/review/:idEvent").get(getReviewsHandler);
router.route("/event/review").post(createReviewHandler);


module.exports = router;
