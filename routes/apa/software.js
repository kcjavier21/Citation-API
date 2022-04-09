const express = require("express");
const router = express.Router();
const { citeSoftware } = require("../../utils/apa/citing/softwareAPA.js");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeSoftware(data);

  res.send(result);
});

module.exports = router;
