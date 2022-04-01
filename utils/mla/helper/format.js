const { getFormattedAuthors } = require("./authors");
const { getFormattedContributor } = require("./contributor");
const { getFormattedVolume } = require("./volume");
const { getFormattedPages } = require("./pages");
const { getFormattedDate } = require("./date");

module.exports = {
    getFormattedAuthors,
    getFormattedContributor,
    getFormattedVolume,
    getFormattedPages,
    getFormattedDate
};