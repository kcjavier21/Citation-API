const { getFormattedAuthors, getFormattedEditionVolume, getFormattedVolumePage, getFormattedLink, getFormattedEditors } = require("../helper/format");

const citeBook = ({ authors, year, book }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedEditionVolume = getFormattedEditionVolume(book);
  const formattedLink = getFormattedLink(book);
  const formattedYear = year ? year : "n.d.";

  let bookCitation = `${formattedAuthors} (${formattedYear}). `;
  bookCitation += `${book.title}${formattedEditionVolume}. ${book.publisher}.${formattedLink}`;

  return bookCitation;
};

// Lastname, A. (year). Title of the chapter 
// in sentence case. In B. Lastname, C. 
// Lastname, & D. Lastname (Eds.), Title of 
// the book in sentence case (Volume, pp. 
// firstpage-lastpage). Publisher. doi

const citeBookChapter = ({ authors, year, chapter, editors, book, pages }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedEditors = editors? `In ${getFormattedEditors(editors)}` : "";
  const formattedVolumePage = getFormattedVolumePage(book.volume, pages);
  const formattedLink = getFormattedLink(book);
  const formattedYear = year ? year : "n.d.";

  let bookChapter = `${formattedAuthors} (${formattedYear}). ${chapter}. ${formattedEditors}`;
  bookChapter += `${book.title} ${formattedVolumePage}. ${book.publisher}.${formattedLink}`;

  return bookChapter;
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


// const data = {
//   authors: [{ firstName: "Sigmund", lastName: "Freud" }],
//   year: "1961",
//   title: "The standard edition of the complete psychological works of Sigmund Freud",
//   volume: "19",
//   page: {
//     start: "3",
//     end: "66",
//   },
//   publisher: "Hogarth Press",
//   origPubYear: "1923",
// };

// console.log(citeRepublishedBook(data));

module.exports = { citeBook, citeBookChapter, citeRepublishedBook };

//CHANGES
// - changed date to year
