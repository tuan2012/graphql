const { AuthorModel } = require("../db");
const AuthorRepo = {
  createAuthor: async (payload) => {
    const rs = await AuthorModel.create(payload);
    return rs;
  },
  findById: async (id) => {
    const author = await AuthorModel.find(id);
    return author;
  },
  findAll: async (condition ={}) => {
    const authors = await AuthorModel.find(condition);
    return authors;
  },
};

module.exports = {
  AuthorRepo
};
