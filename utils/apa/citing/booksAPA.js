const { getFormattedAuthors, getFormattedEditionVolume, getFormattedVolumePage, getFormattedLink, getFormattedEditors } = require("../helper/format");

const citeBook = ({ authors, year, book }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedEditionVolume = getFormattedEditionVolume(book);
  const formattedLink = getFormattedLink(book);
  const formattedYear = year ? year : "n.d.";
  let bookCitation;

  const hasAuthor = formattedAuthors != "";

  if(hasAuthor) {
    bookCitation = `${formattedAuthors} (${formattedYear}). `;
    bookCitation += `<i>${book.title}</i>${formattedEditionVolume}. ${book.publisher}.${formattedLink}`;
  } else {
    bookCitation = `${book.title}${formattedEditionVolume}. (${formattedYear}). `;
    bookCitation += `${book.publisher}.${formattedLink}`;
  }

  return bookCitation;
};

const citeBookChapter = ({ authors, year, chapter, editors, book, pages }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedEditors = (editors[0].firstName != '' && editors[0].lastName != '') ? `In ${getFormattedEditors(editors)}` : "";
  const formattedVolumePage = getFormattedVolumePage(book.volume, pages);
  const formattedLink = book.link ? ` Retrieved from${getFormattedLink(book)}`: "";
  const formattedYear = year ? year : "n.d.";
  let bookChapter;

  const hasAuthor = formattedAuthors != "";

  if(hasAuthor) {
    bookChapter = `${formattedAuthors} (${formattedYear}). ${chapter}. ${formattedEditors}`;
    bookChapter += `<i>${book.title}</i> ${formattedVolumePage}${book.publisher}.${formattedLink}`;
  } else {
    bookChapter = `${chapter} (${formattedYear}). ${formattedEditors}`;
    bookChapter += `<i>${book.title}</i> ${formattedVolumePage}${book.publisher}.${formattedLink}`;
  }

  return bookChapter;
};


const citeRepublishedBook = ({ authors, year, title, volume, pages, publisher, origPubYear }) => {
  const formattedAuthor = getFormattedAuthors(authors);
  const formattedVolume = volume ? `Vol. ${volume}, ` : "";
  const formattedYear = year != null ? year : "n.d.";
  const formattedOrigPubYear = origPubYear ? origPubYear : "n.d.";
  const pageAndVolume = volume != null || pages.start != null ? getFormattedVolumePage(volume, pages) : "";

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

