const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
} = graphql;

// dummy data
let books = [
  {
    id: "1",
    name: "Name of the Wind",
    genere: "Fantasy",
  },
  {
    id: "2",
    name: "The Final Empire",
    genere: "Fantasy",
  },
  {
    id: "3",
    name: "The Long Earth",
    genere: "Sci-Fi",
  },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "BookType description",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genere: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "RootQueryType description",
  fields: {
    book: {
      type: BookType,
      description: "Given an id of the book, query its id, name, genere",
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/other source
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
