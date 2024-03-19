const { Router } = require("express");
const userRouter = require("./userRouter");
const eventRouter = require("./eventRouter");

const router = Router();

router.use("/api/v1/", eventRouter);
router.use("/api/v1/", userRouter);

module.exports = router;
