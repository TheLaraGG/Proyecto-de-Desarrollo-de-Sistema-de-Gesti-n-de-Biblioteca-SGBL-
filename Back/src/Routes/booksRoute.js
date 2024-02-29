const express = require('express');
const router = express.Router();
const booksController = require('../Controllers/booksContoller');

router.get('/',booksController.GetallBooks,);
module.exports=router