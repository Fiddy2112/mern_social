const express = require("express");
const PostController = require("../controllers/PostController");
const router = express.Router();

router.post("/", PostController.create);
router.put("/:id", PostController.update);
router.delete("/:id", PostController.delete);
router.put("/:id/likes", PostController.likePost);
router.get("/:id", PostController.getPost);
router.get("/timeline/:userId", PostController.getTimePost);
router.get("/profile/:username", PostController.getAllPost);

module.exports = router;
