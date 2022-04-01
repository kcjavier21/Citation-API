const express = require("express");
const router = express.Router();
const {  citeBookWebsite, citeBookReader, citeBookPrinted } = require("../../utils/mla/citing/booksMLA");

router.post("/website", (req, res) => {
  const data = req.body;
  const result = citeBookWebsite(data);

  res.send(result);
});

router.post("/reader", (req, res) => {
  const data = req.body;
  const result = citeBookReader(data);

  res.send(result);
});

router.post("/printed", (req, res) => {
  const data = req.body;
  const result = citeBookPrinted(data);

  res.send(result);
});


module.exports = router;
