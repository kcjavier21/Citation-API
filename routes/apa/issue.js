const express = require("express");
const router = express.Router();
const { citeSpecial } = require("../../utils/apa/citing/SpecialIssueAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeSpecial(data);

  res.send(result);
});

module.exports = router;
