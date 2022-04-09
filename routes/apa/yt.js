const express = require("express");
const router = express.Router();
const { citeYoutube } = require("../../utils/apa/citing/youtubeAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeYoutube(data);

  res.send(result);
});

module.exports = router;
