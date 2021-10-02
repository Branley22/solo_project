const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "A book name is required"],
  },
  Description: {
    type: String,
    required: [true, "A book description is required"]
  },
  Categories: {
    type: String,
    required: [true, "A book genre is required"],
    enum: [
      "Action",
      "Comedy",
      "Religion",
      "Self-Help",
      "Romance"
    ]
  },
  Image:{
    type: String,
    required: [true, "A book picture is required"]
  },
  Rating: {
    type: Number,
    min: [0, "0 is the minimum number"],
    max: [5, "5 is the maximum number"]
  }
}, {timestamps: true})

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;