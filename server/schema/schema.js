const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = graphql;

/* START of dummy data */
const books = [
  { id: "1", name: "Name of the Wind", genere: "Fantasy", authorId: "1" },
  { id: "2", name: "The Final Empire", genere: "Fantasy", authorId: "2" },
  { id: "3", name: "The Long Earth", genere: "Sci-Fi", authorId: "3" },
];
const authors = [
  { id: "1", name: "Patrick Rothfuss", age: 44 },
  { id: "2", name: "Brandon Sanderson", age: 42 },
  { id: "3", name: "Terry Pratchett", age: 66 },
];
/* END of dummy data */

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "BookType description",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genere: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        console.log(parent);
        return _.find(authors, {id: parent.authorId});
      }
    }
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "AuthorType description",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "RootQueryType description",
  fields: {
    book: {
      type: BookType,
      description: "Query a book given its id",
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/other source
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      description: "Query an author given its id",
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/other source
        return _.find(authors, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
