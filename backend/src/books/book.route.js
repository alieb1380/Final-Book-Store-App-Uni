const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./bookController');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();

// frontend => backend Server => controller => book schema => database => send to server => back to frontend
// post = when submit STH fronend to DB
// get = when get STH back From DB
// put/patch = when put STH back

// post a book
router.post("/create-book", verifyAdminToken, postABook)

// get all books
router.get("/", getAllBooks)

// single book endpoint
router.get("/:id", getSingleBook)

// update a book endpoint
router.put("/edit/:id", verifyAdminToken, UpdateBook);

// delete a book
router.delete("/:id", verifyAdminToken, deleteABook)

module.exports = router;