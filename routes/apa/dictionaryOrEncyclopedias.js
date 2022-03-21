const express = require("express");
const router = express.Router();
const { citeDictOrEncyclo } = require("../../utils/apa/citing/dictionaryOrEncyclopediasAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeDictOrEncyclo(data);

  res.send(result);
});

module.exports = router;
