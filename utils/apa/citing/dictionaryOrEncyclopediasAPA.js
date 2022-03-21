const { getFormattedAuthors, getFormattedEditors, getFormattedEdition } = require("../helper/format");

const citeEncyclopediaOnline = ({ authors, year, chapterTitle, bookTitle, editors, url }) => {
  const formattedAuthor = getFormattedAuthors(authors);
  const formattedYear = year ? ` (${year}).` : "(n.d.).";
  const formattedChapterTitle = ` ${chapterTitle}`;
  const formattedBookTitle = ` <i>${bookTitle}</i>`;
  //   const formattedEdPage = getFormattedEdition(edition, page);
  const formattedUrl = ` ${url}`;

  const formattedEditors = () => {
    if (editors) {
      let result = `${getFormattedEditors(editors)}`;

      if (editors.length > 1) {
        result = result.concat(" Eds.");
      } else if (editors.length === 1) {
        result = result.concat(" Ed.");
      }

      return result;
    } else {
      return "";
    }
  };

  if (formattedAuthor != "") {
    return (
      formattedAuthor +
      formattedYear +
      formattedChapterTitle +
      " In" +
      formattedEditors() +
      formattedBookTitle +
      //   formattedEdPage +
      formattedUrl
    );
  } else {
    return (
      formattedChapterTitle +
      formattedYear +
      " In" +
      formattedEditors() +
      formattedBookTitle +
      //   formattedEdPage +
      formattedUrl
    );
  }
};

module.exports = { citeEncyclopediaOnline };
