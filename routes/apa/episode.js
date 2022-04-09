const express = require("express");
const router = express.Router();
const { citeEpisode } = require("../../utils/apa/citing/episodeAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeEpisode(data);

  res.send(result);
});

module.exports = router;
