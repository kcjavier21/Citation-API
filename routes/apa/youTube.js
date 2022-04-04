const express = require("express");
const router = express.Router();
const { citeYouTube } = require("../../utils/apa/citing/ytAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeYouTube(data);

  res.send(result);
});

module.exports = router;
