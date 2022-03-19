const express = require("express");
const router = express.Router();
const { citeNewspaper } = require("../../utils/apa/citing/newspapersAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeNewspaper(data);

  res.send(result);
});

module.exports = router;