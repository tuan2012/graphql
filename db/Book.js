const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BookModel = new Schema(
  {
    bookId: String,
    name: {
      type: String,
    },
    genre: { type: String },
    NXB: { type: Date },
    authorIds: { type: [String] },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Book", BookModel);
