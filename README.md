# graphql-playlist

This repo is an exercise of [YouTube playlist 'GraphQL Tutorial'](https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f)
- It is a personal book reading list which shows all book names.
- When you click on one book, it shows book details on the right-hand side.
- On the bottom-left corner, you can add a new book.


## Client
- `React` client using `Apollo` for GraphQL ability.

## Server
- `Node.js` `express` server using `express-graphql` for GraphQL ability.

## Database
- `MongoDB Cloud`


## Usage
### Setup Database
- Register an account at [MongoDB Cloud](https://account.mongodb.com/account/login).
- Create a new cluster.
- Allow connections from anywhere.
- Create a new DB user.
- Create a file named `.env` in `[REPO]/server/`, and put username, password, and cluster name in it. (example `.env` file below)
```
DB_USERNAME=username
DB_PASSWORD=password
DB_NAME=databasename
```

### Setup Server
Open a new terminal:
```
$ cd server
$ npm install
$ npx nodemon app
```
GraphiQL is available at
```
http://localhost:4000/graphql
```
![](https://i.imgur.com/g3NPRSm.png)

### Sample Data
- Open GraphiQL
- Add some sample authors by executing each of the following mutations:
```
mutation {
  addAuthor(name: "Patrick Rothfuss", age: 44) {
    id
  }
}
mutation {
  addAuthor(name: "Brandon Sanderson", age: 42) {
    id
  }
}
mutation {
  addAuthor(name: "Terry Pratchett", age: 66) {
    id
  }
}
```
- You can add books later in React client.

### Setup Client
Open a new terminal:
```
$ cd client
$ npm install
$ npm start
```
React app is available at
```
http://localhost:3000/
```
![](https://i.imgur.com/FYyma6B.png)

