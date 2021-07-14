const BookModel = require("./Book");
const AuthorModel = require("./Author");
const ConnectDB = require("./connect");
const BookAuthorModel = require('./BookAuthor')
module.exports = { BookModel, AuthorModel, ConnectDB, BookAuthorModel };
