const express = require("express");
const router = express.Router();
const { citeSection } = require("../../utils/apa/citing/sectionAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeSection(data);

  res.send(result);
});

module.exports = router;
