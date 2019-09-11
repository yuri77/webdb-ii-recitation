const express = require('express');
const Books = require('./books-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Books.get()
    .then(books => res.status(200).json(books));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Books.getById(id)
    .then(book => {
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).end();
      }
    });
});

router.post('/', (req, res) => {
  const { title, author, publisher, user_rating, isbn, edition } = req.body;
  Books.insert({ title, author, publisher, user_rating, isbn, edition })
    .then(book => {
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: "Error inserting book",
        message: err.message
      });
    });
});

module.exports = router;
