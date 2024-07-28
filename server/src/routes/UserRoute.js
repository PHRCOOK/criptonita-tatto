const express = require("express");
const router = express.Router();
const { createUserController } = require("../controllers/UserController");

router.post("/users", createUserController);

module.exports = router;
