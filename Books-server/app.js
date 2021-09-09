const express = require('express')
const cors = require('cors')
const PORT = 3001
global.models = require('./models')
app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{
    models.Book.findAll({
    }).then(books => res.json(books)
    )
})

app.post('/addBook', (req, res)=>{
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imgUrl = req.body.imgUrl
    
    
    models.Book.create({
        title: title,
        genre: genre,
        publisher: publisher,
        year: parseInt(year),
        imgUrl: imageUrl 
    })
    res.redirect('/')
})

app.post('/deleteBook/:bookid', (req, res)=>{
    let bookid= req.params.bookid
    models.Book.destroy({
        where: {
            bookid: bookid
        }
    })
    res.redirect('/')
})
app.listen(PORT, ()=>{
    console.log("server is running...")
})