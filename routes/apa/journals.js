const express = require("express");
const router = express.Router();
const { citeJournalArticle, citeJournalSupplement } = require("../../utils/apa/citing/journalsAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeJournalArticle(data);

  res.send(result);
});

router.post("/journal-supplement", (req, res) => {
  const data = req.body;
  const result = citeJournalSupplement(data);

  res.send(result);
});

module.exports = router;