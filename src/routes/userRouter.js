const { Router } = require("express");
const router = Router();
const loginHandler = require("../handlers/userHandler/loginHandler");
const logoutHandler = require("../handlers/userHandler/logoutHandler");
const getAllUsersHandler = require("../handlers/userHandler/getAllUsersHandler");
const getOneUserHandler = require("../handlers/userHandler/getOneUserHandler");
const newUserHandler = require("../handlers/userHandler/newUserHandler");


router.route("/login").post(loginHandler);
router.route("/logout").post(logoutHandler);
router.route("/getallusers").get(getAllUsersHandler);
router.route("/getoneuser/:id").get(getOneUserHandler);
router.route("/newuser").post(newUserHandler)
module.exports = router;
