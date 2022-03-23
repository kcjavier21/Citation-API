const express = require("express");
const router = express.Router();
const { citeDataset } = require("../../utils/apa/citing/datasetAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeDataset(data);

  res.send(result);
});

module.exports = router;
