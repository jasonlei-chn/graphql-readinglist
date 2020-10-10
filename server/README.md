# Server side
- It is a [Node.js](https://nodejs.org/en/) [Express](https://expressjs.com/) server.
- It provides [GraphQL](https://graphql.org/) ability by [express-graphql](https://github.com/graphql/express-graphql).
- It's backed by [MongoDB Atlas](https://account.mongodb.com/account/login).

To start the server:
```
$ cd server
$ npx nodemon app
```

## Tutorial Notes:
### 14 - GraphQL Lists
Code is compiled from top to bottom in a file, so if 2 fields reference each other, there will be a reference error of `Type is not defined` for whoever is defined below the other. In order to make the code work in this situation, we need to wrap those definitions inside a function, so it will only be invoked on execution. Example: `BookType: fields` and `AuthorType: fields`.
