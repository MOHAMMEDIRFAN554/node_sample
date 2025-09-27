const Book = require('../model/bookModel');
const multer = require('multer');
const path = require('path');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads')),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

exports.uploadBookCover = upload.single('cover');

exports.addBook = async (req,res)=>{
  const { title, author, category } = req.body;
  const cover = req.file ? req.file.path : null;
  const book = await Book.create({ title, author, category, cover });
  res.json(book);
}

exports.getAllBooks = async (req,res)=>{
  const books = await Book.find();
  res.json(books);
}

exports.getBook = async (req,res)=>{
  const book = await Book.findById(req.params.id);
  res.json(book);
}

exports.updateBook = async (req,res)=>{
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
}

exports.deleteBook = async (req,res)=>{
  await Book.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Book deleted' });
}

exports.searchBooks = async (req,res)=>{
  const { q } = req.query;
  const books = await Book.find({ title: { $regex: q, $options: 'i' } });
  res.json(books);
}

exports.borrowBook = async (req,res)=>{
  const book = await Book.findById(req.params.id);
  if(!book.available) return res.status(400).json({ msg: 'Book not available' });
  book.available = false;
  await book.save();
  res.json({ msg: 'Book borrowed', book });
}

exports.returnBook = async (req,res)=>{
  const book = await Book.findById(req.params.id);
  book.available = true;
  await book.save();
  res.json({ msg: 'Book returned', book });
}
