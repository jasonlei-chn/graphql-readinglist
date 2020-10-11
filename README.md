# graphql-playlist

This repo is an exercise of [YouTube playlist 'GraphQL Tutorial'](https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f)
- It is a personal book reading list which shows all book names.
- When you click on one book, it shows book details on the right-hand side.
- On the bottom-left corner, you can add a new book.


### Client
- React client using Apollo for GraphQL ability.

### Server
- Node.js express server using express-graphql for GraphQL ability.

### Database
- MongoDB cloud version


### Usage
To start the server, in one terminal:
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


To start the client, in another terminal:
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

