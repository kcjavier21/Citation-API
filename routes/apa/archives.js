const express = require("express");
const router = express.Router();
const { citeArchiveSource } = require("../../utils/apa/citing/archivesAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeArchiveSource(data);

  res.send(result);
});

module.exports = router;
