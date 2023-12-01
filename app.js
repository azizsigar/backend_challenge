const express = require("express");
require("dotenv").config();
require("./config/mongoose"); //Mongoose
const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/", (req, res) => {
  res.render("index");
});
//app.use('/', articleRouter)

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
