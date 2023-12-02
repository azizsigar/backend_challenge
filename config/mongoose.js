const mongoose = require("mongoose");

const db_url = "mongodb+srv://obinna:12345678obi@cluster0.4jjpq4h.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(db_url)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

module.exports = mongoose;
