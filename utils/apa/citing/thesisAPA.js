const { getFormattedAuthors } = require("../helper/format");

const citePublishedThesis = ({ authors, year, title, kind, institution, repository, link }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedYear = year ? year : "n.d.";

  let publishedThesisCitation = `${formattedAuthors} (${formattedYear}). `;
  publishedThesisCitation += `<i>${title}</i> [${kind}, ${institution}]. ${repository}. ${link}.`;

  return publishedThesisCitation;
};

const citeUnpublishedThesis = ({ authors, year, title, kind, institution }) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedYear = year ? year : "n.d.";
  
    let unpublishedThesisCitation = `${formattedAuthors} (${formattedYear}). `;
    unpublishedThesisCitation += `<i>${title}</i> [${kind}]. ${institution}.`;
  
    return unpublishedThesisCitation;
  };

module.exports = {
  citePublishedThesis,
  citeUnpublishedThesis,
}