const express = require("express");
const router = express.Router();
const { citeSpecialIssue } = require("../../utils/apa/citing/SpecialIssuesAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeSpecialIssue(data);

  res.send(result);
});

module.exports = router;