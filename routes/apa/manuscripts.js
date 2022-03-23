const express = require("express");
const router = express.Router();
const {
  citeUnPublishedManuscript,
  citeManuscriptInPrep,
  citeManuscriptSubmittedForPub,
  citeAcceptedManuscriptAsArticle,
  citeAcceptedManuscriptAsWorkingPaper,
} = require("../../utils/apa/citing/manuscriptsAPA");

router.post("/unpublished", (req, res) => {
  const data = req.body;
  const result = citeUnPublishedManuscript(data);

  res.send(result);
});

router.post("/in-preparation", (req, res) => {
  const data = req.body;
  const result = citeManuscriptInPrep(data);

  res.send(result);
});

router.post("/submitted-for-publication", (req, res) => {
  const data = req.body;
  const result = citeManuscriptSubmittedForPub(data);

  res.send(result);
});

router.post("/accepted-for-publication/article", (req, res) => {
  const data = req.body;
  const result = citeAcceptedManuscriptAsArticle(data);

  res.send(result);
});

router.post("/accepted-for-publication/working-paper-or-report", (req, res) => {
  const data = req.body;
  const result = citeAcceptedManuscriptAsWorkingPaper(data);

  res.send(result);
});

module.exports = router;
