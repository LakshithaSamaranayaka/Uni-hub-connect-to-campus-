const Post = require("../models/Post");
const Comment = require("../models/Comment");

// GET ALL POSTS
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name role")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to get posts" });
  }
};

//CREATE POST (Protected)
exports.createPost = async (req, res) => {
  try {
    const { category, content } = req.body;

    if (!content || !category) {
      return res
        .status(400)
        .json({ message: "Content and category are required" });
    }

    const post = await Post.create({
      content,
      category,
      author: req.user.id,
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Failed to create post" });
  }
};

//GET POST BY ID
exports.getPostsById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "name role"
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comments = await Comment.find({ post: post._id })
      .populate("author", "name role")
      .sort({ createdAt: -1 });

    res.json({ post, comments });
  } catch (err) {
    res.status(500).json({ message: "Failed to get post" });
  }
};

//DELETE POST (Protected)
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // only author or admin can delete
    const isAuthor = post.author.toString() === req.user.id;
    const isAdmin = req.user.role === "admin";

    if (!isAuthor && !isAdmin) {
      return res.status(403).json({ message: "Access denied" });
    }

    await Comment.deleteMany({ post: post._id });
    await post.deleteOne();

    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete post" });
  }
};

//ADD COMMENT (Protected)
exports.addComment = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Comment text is required" });
    }

    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comment = await Comment.create({
      text,
      post: post._id,
      author: req.user.id,
    });

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: "Failed to add comment" });
  }
};