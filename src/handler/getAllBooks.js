const books = require('../books');

const getAllBooksHandler = (request, h) => {
    const { name: qName, reading, finished } = request.query;

    let data = books;

    if (qName) {
        data = data.filter((x) => x.name.toLowerCase().includes(qName.toLowerCase()));
    }
    if (reading) {
        data = data.filter((x) => x.reading === Boolean(Number(reading)));
    }
    if (finished) {
        data = data.filter((x) => x.finished === Boolean(Number(finished)));
    }
    const response = h.response({
        status: 'success',
        data: {
            books: data.map((book) => ({
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