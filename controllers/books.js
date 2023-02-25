const fs = require('fs');
const { getAllBooks, getBookForId , insertNewBook, updatedBooks, deleteBookId} = require('../servicos/books');


function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function getBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const book = getBookForId(id)
            res.send(book)
        } else {
            res.status(422)
            res.send("Id invalido!")
        }

       
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function postBook(req, res) {
    try {
        const newBook = req.body
        insertNewBook(newBook)
        res.status(201)
        res.send("Livro inserido com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function patchBook(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        updatedBooks(body, id)
        res.send("Item modificado!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function deleteBook(req,res) {
    try {
        const id = req.params.id
        deleteBookId(id)
        res.send("Livro deletado!")
    } catch (error) {
        res.status(500)
        res.send(error.message) 
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}