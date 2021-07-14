const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AuthorModel = new Schema(
  {
    authorId: { type: String },
    name: {
      type: String,
    },
    age: { type: Number },
    bookIds: { type: [String] },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Author", AuthorModel);
