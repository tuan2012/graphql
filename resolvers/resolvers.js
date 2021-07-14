exports.resolvers = {
  Query: {
    books: async (parent, args, { Bookrepo }) => await Bookrepo.findAll(),
    book: async (parent, args, { Bookrepo }) => {
      const book = await Bookrepo.findById({ bookId: args.id });
      return book[0];
    },
    authors: async (parent, args, { AuthorRepo }) => await AuthorRepo.findAll(),
    author: async (parent, args, { AuthorRepo }) => {
      const author = await AuthorRepo.findById({ bookId: args.id });
      return author[0];
    },
  },
  Book: {
    author: async (parent, args, { AuthorRepo, BookAuthorRepo }) => {
      let rs = [];
      const bookAuthors = await BookAuthorRepo.findAll({
        bookId: parent.bookId,
      });
      for (const ba of bookAuthors) {
        const author = await AuthorRepo.findById({ authorId: ba.authorId });
        rs.push(author[0]);
        // console.log(author+ "\n----------------------------------------------------------\n")
      }

      return rs;
    },
  },
  Author:{
    Book:async (parent,args, {Bookrepo, BookAuthorRepo}) =>{
      let rs = [];
      const bookAuthors = await BookAuthorRepo.findAll({
        authorId: parent.authorId,
      });
      console.log(bookAuthors)
      for (const ba of bookAuthors) {
        const book = await Bookrepo.findById({ bookId: ba.bookId });
        rs.push(book[0]);
        // console.log(author+ "\n----------------------------------------------------------\n")
      }

      return rs;
    }
  },
  Mutation: {
    createBook: async (parent, args, { Bookrepo, BookAuthorRepo }) => {
      if (args.authorIds) {
        args.authorIds.forEach((authorId) => {
          BookAuthorRepo.createBookAuthor({
            bookId: args.bookId,
            authorId: authorId,
          });
        });
      }
      const book = await Bookrepo.createBook(args);
      return book;
    },
    createAuthor: async (parent, args, { AuthorRepo }) => {
      if (args.bookIds) {
        args.bookIds.forEach((bookId) => {
          BookAuthorRepo.createBookAuthor({
            bookId: bookId,
            authorId: args.authorId,
          });
        });
      }
      const rs = await AuthorRepo.createAuthor(args);
      return rs;
    },
  },
};
