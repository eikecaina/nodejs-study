const fs = require('fs');

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"))
}
function getBookForId(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const booksFilter = books.filter(books => books.id === id)[0]

    return booksFilter

}
function insertNewBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const newListBooks = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newListBooks))
}
function updatedBooks(modifications, id) {
    let atualBooks = JSON.parse(fs.readFileSync("books.json"))
    const indexModifications = atualBooks.findIndex(books => books.id === id)

    const contentUpdate = {...atualBooks[indexModifications], ...modifications}
    
    atualBooks[indexModifications] = contentUpdate

    fs.writeFileSync("books.json", JSON.stringify(atualBooks))
}
function deleteBookId(id) {
    const book = JSON.parse(fs.readFileSync("books.json"))

    const booksFilter = book.filter(book => book.id !== id)
    fs.writeFileSync("books.json", JSON.stringify(booksFilter))
}
module.exports = {
    getAllBooks,
    getBookForId,
    insertNewBook,
    updatedBooks,
    deleteBookId
}