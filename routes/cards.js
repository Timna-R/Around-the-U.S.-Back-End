const cardsRouter = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const CARDS_PATH = path.join(__dirname, '../data/cards.json');

cardsRouter.get('/cards', (req, res) => {
  fsPromises
    .readFile(CARDS_PATH, { encoding: 'utf8' })
    .then((cards) => {
      const parsedCardsData = JSON.parse(cards);
      res.send(parsedCardsData);
    })
    .catch(() => res.send({ message: 'An error has occurred' }));
});

module.exports = cardsRouter;
