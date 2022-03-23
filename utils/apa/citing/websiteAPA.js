const { getFormattedAuthors, getFormattedLink } = require("../helper/format");

// Lastname, A. (year). Title of the website
// article in sentence case. Name of the 
// Website in Title Case. www.website.com

const citeWebsite = ({ authors, year, article, website }) => {
  const formattedAuthors = getFormattedAuthors(authors);
  const formattedYear = year ? year : "n.d.";
  const formattedLink = getFormattedLink(website);

  let websiteCitation = `${formattedAuthors} (${formattedYear}). `;
  websiteCitation += `${article}. ${website.title}.${formattedLink}`;

  return websiteCitation;
};

module.exports = { citeWebsite }