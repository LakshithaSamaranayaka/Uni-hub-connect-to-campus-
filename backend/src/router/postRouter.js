const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const postController = require("../controllers/postController");

console.log("protect type:", typeof protect);
console.log("createPost type:", typeof postController.createPost);

router.get("/", postController.getPosts);
router.post("/", protect, postController.createPost);

router.get("/:id", postController.getPostsById);
router.delete("/:id", protect, postController.deletePost);
router.post("/:id/comments", protect, postController.addComment);

module.exports = router;