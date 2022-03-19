const { getFormattedAuthors, getFormattedEditionVolume, getFormattedLink } = require("../helper/format");

const citeBook = ({ authors, year, book }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedEditionVolume = getFormattedEditionVolume(book);
  const formattedLink = getFormattedLink(book);
  const formattedYear = year ? year : "n.d.";

  let bookCitation = `${formattedAuthors} (${formattedYear}). `;
  bookCitation += `${book.title}${formattedEditionVolume}. ${book.publisher}.${formattedLink}`;

  return bookCitation;
};

const citeRepublishedBook = ({ authors, year, title, volume, page, publisher, origPubYear }) => {
  let formattedAuthor = "";
  const formattedVolume = volume ? `Vol. ${volume}, ` : "";
  const formattedYear = year ? year : "n.d.";
  const formattedOrigPubYear = origPubYear ? origPubYear : "n.d.";
  const formattedPage =
    page && page.end ? `pp. ${page.start}-${page.end}` : page && !page.end ? `pp. ${page.start}` : "";
  const pageAndVolume = `(${formattedVolume}${formattedPage}). `;

  if (authors.length === 1) {
    formattedAuthor = `${authors[0].lastName}, ${authors[0].firstName[0]}.`;
  }

  const referenceCitation = `${formattedAuthor} (${formattedYear}). <i>${title}</i> ${pageAndVolume}${publisher}. (Original work published ${formattedOrigPubYear})`;
  return referenceCitation;
};

module.exports = { citeBook, citeRepublishedBook };

//CHANGES
// - changed date to year
