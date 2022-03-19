const { getFormattedAuthors, getFormattedVolume, getFormattedLink, getFormattedYearYear } = require("../helper/format");

const citeJournalArticle = ({ authors, year, article, journal }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedVolume = getFormattedVolume(journal);
  const formattedYear = year ? year : 'n.d.';
  const formattedLink = getFormattedLink(journal);

  let journalCitation = `${formattedAuthors} (${formattedYear}). `;
  journalCitation += `${article}. <i>${journal.title}</i>, ${formattedVolume}${journal.page}.${formattedLink}`;

  return journalCitation;
};

module.exports = { citeJournalArticle };
