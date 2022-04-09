const express = require("express");
const router = express.Router();
const { citeVideo} = require("../../utils/apa/citing/videoAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeVideo(data);

  res.send(result);
});

module.exports = router;
