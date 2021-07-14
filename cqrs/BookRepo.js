const { BookModel } = require("../db");
const Bookrepo = {
  createBook: async (payload) => {
    const rs = await BookModel.create(payload);
    return rs;
  },
  findById: async (id) => {
    const book = await BookModel.find(id);
    return book;
  },
  findAll: async (condition  = {}) => {
    const books = await BookModel.find(condition);
    return books;
  },
};

module.exports = { Bookrepo };
