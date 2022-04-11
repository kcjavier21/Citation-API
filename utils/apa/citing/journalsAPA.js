const { getFormattedAuthors, getFormattedVolume, getFormattedLink } = require("../helper/format");

const citeJournalArticle = ({ authors, year, article, journal }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedVolume = getFormattedVolume(journal);
  const formattedYear = year ? year : 'n.d.';
  const formattedLink = getFormattedLink(journal);

  if (formattedAuthors != ""){
    let journalCitation = `${formattedAuthors} (${formattedYear}). `;
    journalCitation += `${article}. <i>${journal.title}</i>, ${formattedVolume}${journal.page}.${formattedLink}`;
    return journalCitation;
  }
  else {
    return `${article}. (${formattedYear}). <i>${journal.title}</i>, ${formattedVolume}${journal.page}.${formattedLink}`;
  }
};

const citeJournalSupplement = ({ author, year, title, titlecase, page }) => {
  const formattedAuthors = getFormattedAuthors (author);
  const formattedYear = year ? year : `n.d.`
  const journalSupplementCitation = `${formattedAuthors}. (${formattedYear}). <i>${title}</i> . ${titlecase}, 42(Suppl. 2), ${page}.`;

  return journalSupplementCitation;
};

// data = {
//   author: [
//    {
//        firstName: "D.",
//        middleInitial: "",
//        lastName: "Vahey", 
//    },
//      {
//        firstName: "L.",
//        middleInitial: "",
//        lastName: "Aiken", 
//    },
//     ],
//   year: "2004",
//   title: "Nurse burnout and patient satisfaction",
//   titlecase: "Medical Care",
//   page: "57-66",
//  };

module.exports = { citeJournalArticle, citeJournalSupplement };
