const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const chalk = require("chalk");

require("dotenv").config();

const app = express();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;
const db_uri = `mongodb+srv://${username}:${password}@cluster0.zdiou.mongodb.net/${db_name}?retryWrites=true&w=majority`;

mongoose.connect(db_uri);
mongoose.connection.once("open", () => {
  console.log(chalk.green("[APP] Connected to MongoDB"));
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log(chalk.green("[APP] Now listening for requests on port 4000"));
});
