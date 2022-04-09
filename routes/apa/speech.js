const express = require("express");
const router = express.Router();
const { citeSpeech } = require("../../utils/apa/citing/speechAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeSpeech(data);

  res.send(result);
});

module.exports = router;
