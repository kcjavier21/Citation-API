const express = require("express");
const router = express.Router();
const { citeBook, citeRepublishedBook, citeBookChapter } = require("../../utils/apa/citing/booksAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeBook(data);

  res.send(result);
});

router.post("/book-chapter", (req, res) => {
  const data = req.body;
  const result = citeBookChapter(data);

  res.send(result);
});

router.post("/republished", (req, res) => {
  const data = req.body;
  const result = citeRepublishedBook(data);

  res.send(result);
});

module.exports = router;
