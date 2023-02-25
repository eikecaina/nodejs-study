const express = require('express')
const routerBook = require("./rotes/books")

const app = express()
app.use(express.json())

app.use('/books', routerBook)

const port = 8000

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
)