const { Router } = require("express");
const router = Router();
const createReviewHandler = require("../handlers/ratingHandler/createReviewHandler");

router.route("/event/review").post(createReviewHandler);

module.exports = router;
