const { getFormattedAuthors, getFormattedLink } = require("../helper/format");

const citeWebsite = ({ authors, year, article, website }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedYear = year ? year : "n.d.";
  const formattedLink = getFormattedLink(website);

  let websiteCitation = `${formattedAuthors} (${formattedYear}). `;
  websiteCitation += `${article}. ${website.title}.${formattedLink}`;

  return websiteCitation;
};

module.exports = {
  citeWebsite,
}