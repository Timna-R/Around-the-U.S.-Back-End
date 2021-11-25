const express = require('express');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

const doesUrlExist = (req, res, next) => {
  res.status(404).send({ message: 'Requested resource not found' });
  next();
};

app.use('/', usersRouter, cardsRouter, doesUrlExist);

app.listen(PORT);
