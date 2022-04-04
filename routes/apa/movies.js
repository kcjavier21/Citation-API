const express = require("express");
const router = express.Router();
const { citeMovie } = require("../../utils/apa/citing/movieAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeMovie(data);

  res.send(result);
});

module.exports = router;
