const { getFormattedAuthors } = require("./authors");
const { getFormattedVolume, getFormattedVolumeWithPage, getFormattedEditionVolume } = require("./volumes");
const { getFormattedLink } = require("./links");
const { getFormattedDateYear, getFormattedDateFull } = require("./dates");
const { getFormattedPaperNo } = require("./paperNumbers");
const { getFormattedEditors } = require("./editors");
const { getFormattedEditionAndPage } = require("./editions");

module.exports = {
  getFormattedAuthors,
  getFormattedVolume,
  getFormattedVolumeWithPage,
  getFormattedEditionVolume,
  getFormattedLink,
  getFormattedDateYear,
  getFormattedDateFull,
  getFormattedPaperNo,
  getFormattedEditors,
  getFormattedEditionAndPage,
};

// CHANGES
// - edited getFormattedDate functions to maximize moment js
