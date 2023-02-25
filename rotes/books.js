const { Router } = require("express")
const { getBooks, getBook, postBook, patchBook, deleteBook } = require("../controllers/books")


const router = Router()

router.get('/', getBooks)
router.get('/:id', getBook)
router.post('/', postBook)
router.patch('/:id', patchBook)
router.delete('/:id', deleteBook)

router.post('/', (req, res) => {
    res.send("Você fez uma requisição post!")
})

module.exports = router