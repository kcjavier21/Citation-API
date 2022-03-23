
const { getFormattedAuthors, getFormattedDate } = require("../helper/format");

const citePreprint = ({ authors, date, title, repository, url }) => {
  let finalAuthors = getFormattedAuthors(authors);
  let finalDate = getFormattedDate(date);
  let finalTitle = ` <i>${title}</i>.`;
  let finalRepository = ` ${repository}.`;
  let finalUrl = ` ${url}`;

  let finalFormat ="";

  finalFormat = finalAuthors + finalDate + finalTitle + finalRepository + finalUrl;
  return finalFormat;
}

module.exports = { citePreprint };