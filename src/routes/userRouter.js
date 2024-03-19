const { Router } = require("express");
const router = Router();
const loginHandler = require("../handlers/userHandler/loginHandler");
const logoutHandler = require("../handlers/userHandler/logoutHandler");
const getAllUsersHandler = require("../handlers/userHandler/getAllUsersHandler");
const getOneUserHandler = require("../handlers/userHandler/getOneUserHandler");

router.route("/login").post(loginHandler);
router.route("/logout").post(logoutHandler);
router.route("/getallusers").get(getAllUsersHandler);
router.route("/getoneuser/:id").get(getOneUserHandler);

module.exports = router;
