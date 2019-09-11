
exports.up = function(knex) {
  return knex.schema.createTable('books', tbl => {
    tbl.increments();
    tbl.string('title').notNullable().unique();
    tbl.string('isbn').notNullable().unique();
    tbl.string('edition').notNullable();
    tbl.string('publisher').notNullable();
    tbl.float('user_rating');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books');
};
