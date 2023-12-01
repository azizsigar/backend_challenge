const express = require("express");
const router = express.Router();
const feedController = require("../controllers/feedController");

router.get("/", feedController.getRedirect);
router.get("/feed", feedController.getAllPosts);
router.post("/feed", feedController.newPost);
router.get("/feed/:id", feedController.getPostById);
router.get("/feed/edit/:id", feedController.getEditPost);
router.post("/feed/edit/:id", feedController.updatePost);
router.post("/feed/delete/:id", feedController.deletePost);
router.get("*", feedController.getNotFoundPage);

module.exports = router;
