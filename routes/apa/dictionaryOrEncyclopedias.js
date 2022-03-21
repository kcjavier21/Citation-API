const express = require("express");
const router = express.Router();
const { citeEncyclopediaOnline } = require("../../utils/apa/citing/dictionaryOrEncyclopediasAPA");

router.post("/online", (req, res) => {
  const data = req.body;
  const result = citeEncyclopediaOnline(data);

  res.send(result);
});

module.exports = router;
