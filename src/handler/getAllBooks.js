const books = require('../books');

const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query;

    // query parameters ?name
    if (name !== undefined) {
        const filteredBooksName = books.filter(
            (book) => book.name.toLowerCase().includes(name.toLowerCase()),
        );
        const response = h.response({
            status: 'success',
            data: {
                books: filteredBooksName.map((book) => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                })),
            },
        });

        response.code(200);
        return response;
    }

    // query parameters ?reading
    if (reading !== undefined) {
        const filteredBooksReading = books.filter(
            (book) => Number(book.reading) === Number(reading),
        );

        const response = h.response({
            status: 'success',
            data: {
                books: filteredBooksReading.map((book) => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                })),
            },
        });

        response.code(200);
        return response;
    }

    // query parameters ?finished
    if (finished !== undefined) {
        const filteredBooksFinished = books.filter(
            (book) => Number(book.finished) === Number(finished),
        );

        const response = h.response({
            status: 'success',
            data: {
                books: filteredBooksFinished.map((book) => ({
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher,
                })),
            },
        });

        response.code(200);
        return response;
    }

    // show all books
    const response = h.response({
        status: 'success',
        data: {
            books: books.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher,
            })),
        },
    });

    response.code(200);
    return response;
};

module.exports = { getAllBooksHandler };