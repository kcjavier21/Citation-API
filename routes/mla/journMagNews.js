const express = require("express");
const router = express.Router();
const { citeJournMagNewsArticle } = require("../../utils/mla/citing/journalsMagazineNewspaperMLA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeJournMagNewsArticle(data);

  res.send(result);
});

module.exports = router;
