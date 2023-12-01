const Feed = require("../models/feed");
//Redirect
const getRedirect = async (req, res) => {
  res.redirect("/feed");
};
//Get All Posts
const getAllPosts = async (req, res) => {
  try {
    const feeds = await Feed.find().sort({ createdAt: -1 });
    res.render("index", { feeds, err: feeds.errors });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};
//Post New Feed
const newPost = async (req, res) => {
  try {
    const feed = new Feed(req.body);
    await feed.save();
    res.redirect("/");
  } catch (err) {
    const feeds = await Feed.find().sort({ createdAt: -1 });
    res.render("index", { feeds, err: err.errors });
  }
};
//Get Unique Post
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const feed = await Feed.findById(id);
    res.render("showOne", { feed });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};
//Get EditPost Page
const getEditPost = async (req, res) => {
  try {
    const { id } = req.params;
    const feed = await Feed.findById(id);
    res.render("editPost", { feed, err: feed.errors });
  } catch (err) {
    console.log(err);
  }
};
//Update Post
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const feed = await Feed.findByIdAndUpdate(id, req.body);
    res.redirect(`/feed/${feed.id}`);
  } catch (err) {
    const feed = await Feed.findByIdAndUpdate(id, req.body);
    console.log(err);
    res.render("editPost", { feed, err: err.errors });
  }
};
//Delete Post
const deletePost = async (req, res) => {
  const { id } = req.params;
  await Feed.findByIdAndDelete(id);
  res.redirect("/");
};

const getNotFoundPage = async (req, res) => {
  res.render("notFound");
};

module.exports = {
  getRedirect,
  getAllPosts,
  newPost,
  getPostById,
  getEditPost,
  updatePost,
  deletePost,
  getNotFoundPage,
};
