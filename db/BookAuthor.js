const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookAuthorModel = new Schema(
  {
    bookId: String,
    authorId: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("BookAuthor", BookAuthorModel);
