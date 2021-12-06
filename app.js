const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/aroundb');

const doesUrlExist = (req, res, next) => {
  res.status(404).send({ message: 'Requested resource not found' });
  next();
};

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Temporary solution, the card have the same author in the database
app.use((req, res, next) => {
  req.user = {
    _id: '61adfd772f61a35cbef311c0', // the test user's _id
  };

  next();
});

app.use('/', usersRouter, cardsRouter, doesUrlExist);

app.listen(PORT);
