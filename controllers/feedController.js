const Feed = require("../models/feed");

const getRedirect = async (req, res) => {
  res.redirect("/feed");
};
const getAllPosts = async (req, res) => {
  try {
    const feeds = await Feed.find().sort({ createdAt: -1 });
    res.render("index", { feeds, err: feeds.errors });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
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
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const feed = await Feed.findById(id);
    res.render("showOne", { feed });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
const getEditPost = async (req, res) => {
  try {
    const { id } = req.params;
    const feed = await Feed.findById(id);
    res.render("editPost", { feed, err: feed.errors });
  } catch (err) {
    console.log(err);
  }
};
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
const deletePost = async (req, res) => {
  const { id } = req.params;
  await Feed.findByIdAndDelete(id);
  res.redirect("/");
};

const getNotFoundPage = async (req, res) => {
  res.render("not Found");
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
