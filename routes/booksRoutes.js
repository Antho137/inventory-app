const express = require('express');
const booksController = require('../controllers/booksController');

const router = express.Router();

// Get Books
router.get('/books', booksController.getBooks);

// Get the form to add a new book
router.get('/create', booksController.getCreateBook);

// Post the form to add a new book
router.post('/create', booksController.postCreateBook);

// Get the form to update a book
router.get('/edit/:id', booksController.getEditBook);

// Post the form to update a book
router.post('/edit/:id', booksController.postEditBook);

// Get the form to delete a book
router.get('/delete/:id', booksController.getDeleteBook);

// Post the form to delete a book
router.post('/delete/:id', booksController.postDeleteBook);

// Get books categories
router.get('/categories', booksController.getCategories);

// Get computer science books category
router.get('/compscCategory', booksController.getCompscCategory);

// Get database books category
router.get('/databaseCategory', booksController.getDatabaseCategory);

// Get MIS books category
router.get('/misCategory', booksController.getMisCategory);

// Get programming books category
router.get('/progCategory', booksController.getProgCategory);

// Get web books category
router.get('/webCategory', booksController.getWebCategory);

module.exports = router;
