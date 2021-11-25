const express = require('express');
const usersRouter = require('./rouets/users');
const cardsRouter = require('./rouets/cards');

const { PORT = 3000 } = process.env;
const app = express();

const doesUrlExist = (req, res, next) => {
  if (
    req.path !== '/users'
    && req.path !== '/cards'
    && req.path !== '/users/:id'
  ) {
    res.send({ message: 'Requested resource not found' });
    return;
  }

  next();
};

app.use('/', usersRouter, cardsRouter, doesUrlExist);

app.listen(PORT);
