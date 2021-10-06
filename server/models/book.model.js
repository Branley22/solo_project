const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A book name is required"],
  },
  description: {
    type: String,
    required: [true, "A book description is required"]
  },
  categories: {
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
  image:{
    type: String,
    required: [true, "A book picture is required"]
  },
  rating: {
    type: Number,
    min: [0, "0 is the minimum number"],
    max: [5, "5 is the maximum number"]
  },
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  createdByUserName:{
    type:String
  }
}, {timestamps: true})

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;