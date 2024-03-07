const express = require('express');
const router = express.Router();

//!------------------------------------books---------------------------------------!\\
const {controller,getAllBooks,getById,addBook,updateBook,deleteBook} = require('../Controllers/BooksController')
router.get('/books/test',controller.book)
router.get('/books/:id',getById)
router.post('/books',addBook)
router.put('/books/:id',updateBook)
router.get('/books',getAllBooks)
router.delete('/books/:id',deleteBook)
module.exports=router

