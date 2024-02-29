const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  titulo: { type: String,},
  descripcion:{ type: String },
  genero: { type: String},
  editorial: { type: String},
  precio: { type: Number},
  stock: { type: Number},
  imagen: { type: String},
  fechaPublicacion: { type: Date },
  autor: { type: String}

})

const Book = mongoose.model('Libros', bookSchema);

module.exports = Book;