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



//!------------------------------------users---------------------------------------!\\
const {getAllUsers,getUserById,addUser,updateUser,deleteUser} = require('../Controllers/UserController')
router.get('/users',getAllUsers)
router.get('/users/:id',getUserById)
router.post('/users',addUser)
router.put('/users/:id',updateUser)
router.delete('/users/:id',deleteUser)
module.exports=router

