const express = require("express");
const router = express.Router();
const { citeVideoGame } = require("../../utils/apa/citing/videoGameAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeVideoGame(data);

  res.send(result);
});

module.exports = router;