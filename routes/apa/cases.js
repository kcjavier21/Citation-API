const express = require("express");
const router = express.Router();
const { citeCase } = require("../../utils/apa/citing/caseAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeCase(data);

  res.send(result);
});

module.exports = router;