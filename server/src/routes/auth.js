const express = require("express");
const AuthController = require("../controllers/AuthController");
const { verifyToken } = require("../middleware/auth");
const router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/", verifyToken, AuthController.logged);
module.exports = router;
