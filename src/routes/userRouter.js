const { Router } = require("express");
const router = Router();

const login = require("../handlers/userHandler/login");
const logoutHandler = require("../handlers/userHandler/logoutHandler");
const getAllUsersHandler = require("../handlers/userHandler/getAllUsersHandler");
const getOneUserHandler = require("../handlers/userHandler/getOneUserHandler");
const register = require("../handlers/userHandler/register");
const changeStatus = require("../handlers/userHandler/changeStatus")
const changeTypeUser = require("../handlers/userHandler/changeTypeUser")

router.route("/getallusers").get(getAllUsersHandler);
router.route("/getoneuser/:id").get(getOneUserHandler);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logoutHandler);
router.route("/status/:id_user/:status").put(changeStatus)
router.route("/usertype/:id_user/:type_user").put(changeTypeUser)


module.exports = router;
