const express = require("express");
const router = express.Router();
const { citeReport } = require("../../utils/apa/citing/reportsAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeReport(data);

  res.send(result);
});

module.exports = router;