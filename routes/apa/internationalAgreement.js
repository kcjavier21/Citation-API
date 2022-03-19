const express = require("express");
const router = express.Router();
const { citeInternationalAgreement } = require("../../utils/apa/citing/internationalAgreementAPA");

router.post("/", (req, res) => {
  const data = req.body;
  const result = citeInternationalAgreement(data);

  res.send(result);
});

module.exports = router;