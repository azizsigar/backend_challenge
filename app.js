const express = require("express");
require("dotenv").config();
require("./config/mongoose"); //Mongoose
const PORT = process.env.PORT || 3000;

const app = express();
const feedRouter = require("./config/feedRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(feedRouter);

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
