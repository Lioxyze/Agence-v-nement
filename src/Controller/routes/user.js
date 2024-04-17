const express = require("express");
const { register, getAllUsers } = require("../UserController");

const router = express.Router();

router.route("/register").post(register);
router.route("/getAllUsers").get(getAllUsers);

module.exports = router;
