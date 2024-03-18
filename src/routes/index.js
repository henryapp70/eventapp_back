const { Router } = require("express");
// const driversRouter = require("./driversRouter");
// const teamsRouter = require("./teamsRouter");

const router = Router();

// router.use("/drivers", driversRouter);
router.use("/", (req,res)=>{
  console.log("first endpoint")
});

module.exports = router;
