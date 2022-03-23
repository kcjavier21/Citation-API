const express = require("express");
const router = express.Router();
const { citePreprint } = require("../../utils/apa/citing/preprintAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citePreprint(data);

  res.send(result);
});

module.exports = router;
