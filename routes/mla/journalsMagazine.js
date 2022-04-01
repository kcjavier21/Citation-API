const express = require("express");
const router = express.Router();
const { citeElectronicJournalArticle } = require("../../utils/mla/citing/journalsMagazineMLA");

router.post("/Electronic", (req, res) => {
  const data = req.body;
  const result = citeElectronicJournalArticle(data);

  res.send(result);
});

module.exports = router;
