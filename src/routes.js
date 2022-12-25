const { addBookHandler } = require('./handler/addBook');
const { getAllBooksHandler } = require('./handler/getAllBooks');
const { getBookByIdHandler } = require('./handler/getBookById');
const { editBookByIdHandler } = require('./handler/editBook');
const { deleteBookByIdHandler } = require('./handler/deleteBook');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;