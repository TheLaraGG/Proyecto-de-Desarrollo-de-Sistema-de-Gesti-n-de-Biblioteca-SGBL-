const express = require('express');
const mongoose = require('mongoose');   

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/ BibliotecaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const booksRouter = require('./Routes/booksRoute');
app.use('/books', booksRouter);



app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
