const express = require("express");
const router = express.Router();
const { citeWebWithAuthor, citeWebWithout } = require("../../utils/mla/citing/websiteMLA.js");

router.post("/w-author", (req, res) => {
  const data = req.body;
  const result = citeWebWithAuthor(data);

  res.send(result);
});

router.post("/wo-author", (req, res) => {
  const data = req.body;
  const result = citeWebWithout(data);

  res.send(result);
});