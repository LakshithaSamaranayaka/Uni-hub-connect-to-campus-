const Post= require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");

exports.getPosts = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const category = req.query.category;

    const filter = category ? { category } : {};

    const posts = await Post.find(filter)
     .populate("author", "name role")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ page, limit, count: posts.length, posts });
}

exports.createPost = async (req, res) => {
    const { content, category } = req.body;
    if (!content || !category) {
        return res.status(400).json({ message: "Content and category are required" });

    const post = await Post.create({
        content,
        category,
        author: req.user.id,
    });

    res.status(201).json({ post });
} ;

exports.getPostById = async (req, res) => {
    const post = await Post.findById(req.params.id).populate("author", "name role");
    if (!post) return res.status(404).json({ message: "Post not found" });

    const comments = await Comment.find({ post: post._id })
        .populate("author", "name role")
        .sort({ createdAt: -1 });

    res.json({ post, comments });
};

exports.deletePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    // Only author or admin can delete
    const isAuthor = post.author.toString() === req.user.id;
    const isAdmin = req.user.role === "admin";
    if (!isAuthor && !isAdmin) return res.status(403).json({ message: "Access denied" });

    await Comment.deleteMany({ post: post._id });
    await post.deleteOne();

    res.json({ message: "Post deleted" });
};

exports.addComment = async (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Comment text is required" });

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const comment = await Comment.create({
        text,
        post: post._id,
 });

    res.status(201).json({ comment });
}; }