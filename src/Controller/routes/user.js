const express = require("express");
const { register, getAllUsers, login } = require("../UserController");

const router = express.Router();

router.route("/register").post(register);
router.route("/getAllUsers").get(getAllUsers);
router.route("/login").post(login);

module.exports = router;
