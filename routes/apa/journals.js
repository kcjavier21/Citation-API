const express = require("express");
const router = express.Router();
const { citeJournalArticle } = require("../../utils/apa/citing/journalsAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeJournalArticle(data);

  res.send(result);
});

module.exports = router;