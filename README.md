# graphql-playlist

This repo is an exercise of [YouTube playlist 'GraphQL Tutorial'](https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f)

To install libraries:
```
$ npm install express dotenv chalk
```

To start the server:
```
$ cd server
$ npx nodemon app
```

## Tutorial Notes:
### 14 - GraphQL Lists
Code is compiled from top to bottom in a file, so if 2 fields reference each other, there will be a reference error of `Type is not defined` for whoever is defined below the other. In order to make the code work in this situation, we need to wrap those definitions inside a function, so it will only be invoked on execution. Example: `BookType: fields` and `AuthorType: fields`.

