const express = require("express");
const router = express.Router();
const { citeJournal } = require("../../utils/apa/citing/journalAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeJournal(data);

  res.send(result);
});

module.exports = router;
