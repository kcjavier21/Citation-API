const express = require("express");
const router = express.Router();
const { citeWebsite } = require("../../utils/apa/citing/websiteAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeWebsite(data);

  res.send(result);
});

module.exports = router;