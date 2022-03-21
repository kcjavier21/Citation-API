const { getFormattedAuthors, getFormattedDateFull } = require("../helper/format");

const citeNewspaper = ({ authors, date, article, newspaper }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedDate = getFormattedDateFull(date);

  let newspaperCitation = `${formattedAuthors}${formattedDate} ${article}. <i>${newspaper.title}</i>, ${newspaper.pages}.`;

  return newspaperCitation;
};

module.exports = { citeNewspaper };
