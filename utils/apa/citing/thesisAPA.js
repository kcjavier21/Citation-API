const { getFormattedAuthors } = require("../helper/format");

// Lastname, A. A. (year). Title of thesis in 
// sentence case [Doctoral or Master’s 
// thesis or dissertation, Name of the 
// Institution]. Repository. 
// www.website.com

const citePublishedThesis = ({ authors, year, title, kind, institution, repository, link }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedYear = year ? year : "n.d.";

  let publishedThesisCitation = `${formattedAuthors} (${formattedYear}). `;
  publishedThesisCitation += `${title} [${kind}, ${institution}]. ${repository}. ${link}.`;

  return publishedThesisCitation;
};

// Lastname, A. A. (year). Title of thesis in 
// sentence case [Unpublished doctoral or 
// Master’s thesis or dissertation]. 
// University.

const citeUnpublishedThesis = ({ authors, year, title, kind, institution }) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedYear = year ? year : "n.d.";
  
    let unpublishedThesisCitation = `${formattedAuthors} (${formattedYear}). `;
    unpublishedThesisCitation += `${title} [${kind}]. ${institution}.`;
  
    return unpublishedThesisCitation;
  };

module.exports = {
  citePublishedThesis,
  citeUnpublishedThesis,
}