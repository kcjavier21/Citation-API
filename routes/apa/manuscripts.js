const express = require("express");
const router = express.Router();
const { citeUnPublishedManuscript } = require("../../utils/apa/citing/manuscriptsAPA");

router.post("/unpublished", (req, res) => {
  const data = req.body;
  const result = citeUnPublishedManuscript(data);

  res.send(result);
});

module.exports = router;