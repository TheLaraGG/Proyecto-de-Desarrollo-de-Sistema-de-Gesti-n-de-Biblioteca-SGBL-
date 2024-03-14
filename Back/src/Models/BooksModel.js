const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    titulo: String,
    portada: String,
    precio: Number,
    autor: String,
    fecha_salida:String,
    cantidad:Number,
    resena:Number
});
module.exports =mongoose.model("libros",bookSchema);
