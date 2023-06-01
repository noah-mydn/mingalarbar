const express = require("express");
const userController = require("../Controllers/userController");
const router = express.Router();

router.route("/login").post(userController.LoginUser);

router.route("/register").post(userController.RegisterNewUser);

module.exports = router;
