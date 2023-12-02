const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

const feedSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Enter your name!"],
      trim: true,
      maxLength: [15, "Name must be less than 15 characters"],
    },
    message: {
      type: String,
      required: [true, "Enter message!"],
      trim: true,
      maxLength: [40, "Message must be less than 40 characters"],
    },
    date: {
      type: Date,
      default: Date.now,
      get: function (createdAt) {
        return moment(createdAt).format("MMMM Do YYYY, h:mm:ss a");
      },
    },
  },
  { timestamps: true }
);

const Feed = mongoose.model("Feed", feedSchema);
module.exports = Feed;
