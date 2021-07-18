const express = require('express');// build web applications in node.js
const {graphqlHTTP} = require('express-graphql'); //support connect styled middleware
const cors = require('cors'); //allow cross-origin
const schema = require('./schema');
const path = require('path');

const app = express(); //initialize express

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true //playground control
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));