const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type Book {
    bookId: String
    name: String
    genre: String
    NXB: String
    createdAt: String
    updatedAt: String
    author: [Author]
  }
  type Author {
    authorId: String
    name: String
    age: Int
    createdAt: String
    updatedAt: String
    Book: [Book]
  }
  type Query {
    books: [Book]
    authors: [Author]
    book(id: String!): Book
    author(id: String!): Author
  }
  type Mutation {
    createBook(
      bookId: String
      name: String
      genre: String
      NXB: String
      authorIds: [String]
    ): Book
    createAuthor(authorId:String,name: String, age: Int, bookIds:[String]): Author
  }
`;
