const express = require("express");
const router = express.Router();
const { citePublishedThesis, citeUnpublishedThesis } = require("../../utils/apa/citing/thesisAPA");

router.post("/published-thesis", (req, res) => {
  const data = req.body;
  const result = citePublishedThesis(data);

  res.send(result);
});

router.post("/unpublished-thesis", (req, res) => {
    const data = req.body;
    const result = citeUnpublishedThesis(data);
  
    res.send(result);
  });

module.exports = router;
