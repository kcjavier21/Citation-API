const express = require("express");
const router = express.Router();
const { citeBrochure } = require("../../utils/apa/citing/brochuresAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeBrochure(data);

  res.send(result);
});

module.exports = router;