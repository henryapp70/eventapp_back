const { Router } = require("express");
const router = Router();
const createPaymentHandler = require("../handlers/paymentHandler/createPaymentHandler");
const successPaymentHandler = require("../handlers/paymentHandler/successPaymentHandler");
const cancelPaymentHandler = require("../handlers/paymentHandler/cancelPaymentHandler");

router.route("/payment/create-checkout-session").post(createPaymentHandler);
router.route("/payment/success").get(successPaymentHandler);
router.route("/payment/cancel").get(cancelPaymentHandler);

module.exports = router;
