const express = require("express");
const router = express.Router();
const { citeYTVideo } = require("../../utils/apa/citing/ytVideoAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeYTVideo(data);

  res.send(result);
});

module.exports = router;
