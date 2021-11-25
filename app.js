const express = require('express');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

const doesUrlExist = (req, res, next) => {
  if (
    req.path !== '/users'
    && req.path !== '/cards'
    && req.path !== '/users/:id'
  ) {
    res.status(404).send({ message: 'Requested resource not found' });
    return;
  }

  next();
};

app.use('/', usersRouter, cardsRouter, doesUrlExist);

app.listen(PORT);
