const { Router } = require("express");
const router = Router();
const registerPurchaseHandler = require("../handlers/purchaseHandler/registerPurchaseHandler")

router.route("/purchase/:idUser/:idTicket").post(registerPurchaseHandler);

module.exports = router;
