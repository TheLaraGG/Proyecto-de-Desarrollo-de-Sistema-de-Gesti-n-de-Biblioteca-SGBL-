const express = require('express');
const mongoose = require('mongoose');   

const app = express();
const port = 3000;
mongoose.connect('mongodb://localhost:27017/biblioteca', {});

app.use(require('./Routes/routes'))

app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
