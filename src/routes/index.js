const { Router } = require("express");
const userRouter = require("./userRouter");
const eventRouter = require("./eventRouter");
const ticketRouter = require("./ticketRouter");

const router = Router();

router.use("/api/v1/", ticketRouter);
router.use("/api/v1/", userRouter);
router.use("/api/v1/", eventRouter);

module.exports = router;
