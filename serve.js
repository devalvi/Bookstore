const express = require('express');
const { shuffle } = require('lodash')
const cors = require('cors')
let books = []
let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('books.txt'),
    terminal: false
});
lineReader.on('line', line => {
    books.push(JSON.parse(line))
});
const app = express()

app.use(cors())
app.use(express.json())
app.get('/books', (req, res) => {
    res.json({
        books: shuffle(books)
    })
    res.end()
})

app.listen(3031)