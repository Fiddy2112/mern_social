const express = require("express");
const UserController = require("../controllers/UserController");
const { verifyToken, verifyTokenAdmin } = require("../middleware/auth");
const router = express.Router();

router.put("/:id", verifyToken, UserController.update);
router.delete("/:id", verifyToken, UserController.delete);
router.get("/", verifyToken, UserController.get);
router.put("/:id/follow", UserController.followUser);
router.put("/:id/unfollow", UserController.unFollowUser);
router.get("/friend/:userId", UserController.getFriends);

module.exports = router;
