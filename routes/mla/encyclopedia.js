const express = require("express");
const router = express.Router();
const { citeElectronicEncyclopedia, citePrintedEncyclopedia } = require("../../utils/mla/citing/encyclopediaMLA");

router.post("/e-encyclopedia", (req, res) => {
  const data = req.body;
  const result = citeElectronicEncyclopedia(data);

  res.send(result);
});

router.post("/p-encyclopedia", (req, res) => {
  const data = req.body;
  const result = citePrintedEncyclopedia(data);

  res.send(result);
});

module.exports = router;
