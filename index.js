const express = require('express');
const booksRouter = require('./books/books-router.js');

const server = express();

server.use(express.json());

server.use('/books', booksRouter);

const port = 6234;
server.listen(port, () => console.log(`Server running on ${port}`));
