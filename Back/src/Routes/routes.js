const express = require('express');
const router = express.Router();
const Bcontroller = require('../Controllers/BooksController')
router.get('/books',Bcontroller.book)
module.exports=router
