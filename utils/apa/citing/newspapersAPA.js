const { getFormattedAuthors, getFormattedDate, getFormattedPages } = require("../helper/format");

const citeNewspaper = ({ authors, date, article, pages, newspaper }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedDate = getFormattedDate(date);
  const formattedPages = pages ? `, ${getFormattedPages(pages)}` : "";
  let newspaperCitation;

  const hasAuthor = formattedAuthors != "";

  if(hasAuthor) {
    newspaperCitation = `${formattedAuthors}${formattedDate} ${article}. <i>${newspaper}</i>${formattedPages}.`;
  } else {
    newspaperCitation = `${article}${formattedDate} <i>${newspaper}</i>${formattedPages}.`;
  }

  return newspaperCitation;
};

const citeOnlineNewspaper = ({ authors, date, article, newspaper, pages, link }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedDate = getFormattedDate(date);
  const formattedPages = (pages.start != null) ? `, ${getFormattedPages(pages)}` : "";
  const formattedLink = link ? `. ${link}.` : "";
  let onlineNewspaperCitation;

  const hasAuthor = formattedAuthors != "";

  if(hasAuthor) {
    onlineNewspaperCitation = `${formattedAuthors}${formattedDate} ${article}. <i>${newspaper}</i>${formattedPages}${formattedLink}`;
  } else {
    onlineNewspaperCitation = `${article}${formattedDate} <i>${newspaper}</i>${formattedPages}${formattedLink}`;
  }
  return onlineNewspaperCitation;
};

module.exports = { citeNewspaper, citeOnlineNewspaper };
