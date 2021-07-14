const { BookAuthorModel } = require("../db");
const BookAuthorRepo = {
  createBookAuthor: async (payload) => {
    const rs = await BookAuthorModel.create(payload);
    return rs;
  },
  findById: async (id) => {
    const author = await BookAuthorModel.find(id);
    return author;
  },
  findAll: async (condition ={}) => {
    const authors = await BookAuthorModel.find(condition);
    return authors;
  },
};

module.exports = {
    BookAuthorRepo
};
