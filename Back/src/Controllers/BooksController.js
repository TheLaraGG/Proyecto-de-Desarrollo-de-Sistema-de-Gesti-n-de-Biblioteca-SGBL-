
const controller={}
const Book=require('../Models/BooksModel')



const getAllBooks = async (req, res) => {
    const Books=await Book.find();
    res.json(Books);
}
const getById = async (req, res) => {
    const id = req.params.id;
    const Books = await Book.findById(id);
    res.json(Books);
}
const addBook = async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.send("Book Saved");
    res.json(newBook);
}

const updateBook = async (req, res) => {
    const book =await Book.findByIdAndUpdate(req.params.id,req.body)
    res.send("Book Updated");
}

const deleteBook = async (req, res) => {
    const book =await Book.findByIdAndDelete(req.params.id)
    res.json({menssge:"Book Deleted"});
}
controller.book=(req, res) => {
    res.send("Hello Books!");
}
module.exports={controller,getAllBooks,getById,addBook,updateBook,deleteBook}