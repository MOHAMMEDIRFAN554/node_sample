const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware')
const bookController = require('../controller/BookController');

router.post('/addBook', auth, bookController.uploadBookCover, bookController.addBook);  // API 6
router.get('/getAllBook', auth, bookController.getAllBooks);                            // API 7
router.get('/getBook/:id', auth, bookController.getBook);                               // API 8
router.put('/updateBook/:id', auth, bookController.updateBook);                         // API 9
router.delete('/deleteBook/:id', auth, bookController.deleteBook);                      // API 10
router.get('/search', auth, bookController.searchBooks);                                // API 11
router.put('/borrow/:id', auth, bookController.borrowBook);                             // API 12
router.put('/return/:id', auth, bookController.returnBook);                             // API 13

module.exports = router;