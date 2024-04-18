const { Router } = require("express");
const userRouter = require("./userRouter");
const eventRouter = require("./eventRouter");
const ticketRouter = require("./ticketRouter");
const sponsorRouter = require("./sponsorRouter");
const paymentRouter = require("./paymentRouter");
const ratingRouter = require("./ratingRouter");

const router = Router();

router.use("/api/v1/", ticketRouter);
router.use("/api/v1/", userRouter);
router.use("/api/v1/", eventRouter);
router.use("/api/v1/", sponsorRouter);
router.use("/api/v1/", paymentRouter);
router.use("/api/v1/", ratingRouter);

module.exports = router;
