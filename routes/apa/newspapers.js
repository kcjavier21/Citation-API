const express = require("express");
const router = express.Router();
const { citeNewspaper, citeOnlineNewspaper } = require("../../utils/apa/citing/newspapersAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeNewspaper(data);

  res.send(result);
});

router.post("/online-newspaper", (req, res) => {
  const data = req.body;
  const result = citeOnlineNewspaper(data);

  res.send(result);
});

module.exports = router;