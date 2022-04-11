const express = require("express");
const router = express.Router();
const { citeTelevision } = require("../../utils/apa/citing/televisionAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeTelevision(data);

  res.send(result);
});

module.exports = router;