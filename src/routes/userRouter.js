const { Router } = require("express");
const router = Router();
//const registerHandler = require("../handlers/userHandler/registerHandler");
//const loginHandler = require("../handlers/userHandler/loginHandler");
const logoutHandler = require("../handlers/userHandler/logoutHandler");
const getAllUsersHandler = require("../handlers/userHandler/getAllUsersHandler");
const getOneUserHandler = require("../handlers/userHandler/getOneUserHandler");
//const newUserHandler = require("../handlers/userHandler/newUserHandler");

router.route("/getallusers").get(getAllUsersHandler);
router.route("/getoneuser/:id").get(getOneUserHandler);
//router.route("/register").post(registerHandler);
//router.route("/login").post(loginHandler);
router.route("/logout").post(logoutHandler);

module.exports = router;
