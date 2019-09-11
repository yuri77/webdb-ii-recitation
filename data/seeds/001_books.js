
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          "title": "test more things",
          "author": "Hank",
          "publisher": "MIT Press",
          "isbn": "4",
          "edition": "5",
          "user_rating": 4.2
        }
      ]);
    });
};
