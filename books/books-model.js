const db = require('../data/db.js');

module.exports = {
  get,
  getById,
  insert
};

function get() {
  return db('books');
}

function getById(id) {
  return db('books').where({ id: Number(id) }).first();
}

function insert(book) {
  return db('books')
    .insert(book)
    .then(([id]) => getById(id));
}
