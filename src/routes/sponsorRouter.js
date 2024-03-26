const { Router } = require("express");
const router = Router();
const getAllSponsorHandler = require("../handlers/sponsorHandler/getAllSponsorHandler");
const registerSponsorHandler = require("../handlers/sponsorHandler/registerSponsorHandler");
const updateSponsorHandler = require("../handlers/sponsorHandler/updateSponsorHandler");
const deleteSponsorHandler = require("../handlers/sponsorHandler/deleteSponsorHandler");

router.route("/sponsor").get(getAllSponsorHandler); 
router.route("/sponsor").post(registerSponsorHandler); 
router.route("/sponsor/:id").put(updateSponsorHandler); 
router.route("/sponsor/:id").delete(deleteSponsorHandler); 

module.exports = router;