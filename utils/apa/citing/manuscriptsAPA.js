const { getFormattedAuthors } = require("../helper/format");

const citeUnPublishedManuscript = ({ authors, year, title }) => {
  let formattedAuthors = getFormattedAuthors(authors);
  const referenceCitation = `${formattedAuthors} (${year}). <i>${title}.</i> Unpublished manuscript.`;
  return referenceCitation;
};

const citeManuscriptInPrep = ({ authors, year, title }) => {
  let formattedAuthors = getFormattedAuthors(authors);
  const referenceCitation = `${formattedAuthors} (${year}). <i>${title}.</i> Manuscript in preparation.`;
  return referenceCitation;
};

const citeManuscriptSubmittedForPub = ({ authors, year, title }) => {
  let formattedAuthors = getFormattedAuthors(authors);
  const referenceCitation = `${formattedAuthors} (${year}). <i>${title}.</i> Manuscript submitted for publication.`;
  return referenceCitation;
};

const citeAcceptedManuscriptAsArticle = ({ authors, title, journal }) => {
  let formattedAuthors = getFormattedAuthors(authors);
  const referenceCitation = `${formattedAuthors} (in press). ${title}. <i>${journal}.</i>`;
  return referenceCitation;
};

const citeAcceptedManuscriptAsWorkingPaper = ({ authors, title, reportNumber, publisher }) => {
  let formattedAuthors = getFormattedAuthors(authors);
  const referenceCitation = `${formattedAuthors} (in press). <i>${title}</i> (${reportNumber}). ${publisher}.`;
  return referenceCitation;
};

module.exports = {
  citeUnPublishedManuscript,
  citeManuscriptInPrep,
  citeManuscriptSubmittedForPub,
  citeAcceptedManuscriptAsArticle,
  citeAcceptedManuscriptAsWorkingPaper,
};
