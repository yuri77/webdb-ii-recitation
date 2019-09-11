
exports.up = function(knex) {
  return knex.schema
    .raw('DROP INDEX books_title_unique');
  //   .table('books', tbl => {
  //     // does not work on sqlite
  //     // tbl.dropUnique('title');
  //     tbl.dropIndex('title', 'books_title_unique');
  // });
};

exports.down = function(knex) {
  return knex.schema.table('books', tbl => {
    tbl.unique('title');
  });
};
