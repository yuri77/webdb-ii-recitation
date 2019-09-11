
exports.up = function(knex) {
  return knex.schema.table('books', tbl => {
    tbl.string('author').notNullable().defaultTo("");
  });
};

exports.down = function(knex) {
  return knex.schema.table('books', tbl => {
    tbl.dropColumn('author');
  });
};

// exports.up = function(knex, Promise) {
//   if (require('config').database.client === 'mysql') {
//     return knex.schema.table('posts', function(t) {
//       t.renameColumn('foo', 'bar');
//     });
//   } else if (require('config').database.client === 'sqlite3') {
//     // copy original table
//     return knex.raw('create table copy_posts AS select * from posts')
//       .then(function() {
//         return knex.schema.dropTable('posts');
//       })
//       .then(function() {
//         // create new posts table
//         return knex.schema.createTable('posts', function(t) {
//           // ...
//           // other column definitions
//           // ...
//           // t.string('bar');
//         });
//       })
//       .then(function() {
//         return knex.raw('insert into posts select * from copy_posts');
//       })
//       .then(function() {
//         return knex.schema.dropTable('copy_posts');
//       });
//   }
// };
