const { Router } = require("express");
const router = Router();

const login = require("../handlers/userHandler/login");
const logoutHandler = require("../handlers/userHandler/logoutHandler");
const getAllUsersHandler = require("../handlers/userHandler/getAllUsersHandler");
const getOneUserHandler = require("../handlers/userHandler/getOneUserHandler");
const register = require("../handlers/userHandler/register");

router.route("/getallusers").get(getAllUsersHandler);
router.route("/getoneuser/:id").get(getOneUserHandler);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logoutHandler);

module.exports = router;
