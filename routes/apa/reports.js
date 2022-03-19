const express = require("express");
const router = express.Router();
const { citeReports } = require("../../utils/apa/citing/reportsAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeReports(data);

  res.send(result);
});

module.exports = router;