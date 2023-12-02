const express = require("express");
// No need for dotenv if you're not using a .env file
// require("dotenv").config();
require("./config/mongoose"); 

const PORT = 2003; // Set your desired port number

const app = express();
const feedRouter = require("./config/feedRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(feedRouter);

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
