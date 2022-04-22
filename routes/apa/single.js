const express = require("express");
const router = express.Router();
const { citeSingle } = require("../../utils/apa/citing/singleAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeSingle(data);

  res.send(result);
});

module.exports = router;
