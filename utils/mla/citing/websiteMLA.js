const { getFormattedAuthors, getFormattedContributor, getFormattedVolume } = require("../helper/format");

const citeWebWithAuthor = ({ authors, title, publication, contributor, version, database, year, location }) => {
  const formattedAuthors = authors ? getFormattedAuthors(authors) : "";
  const formattedContributor = contributor ? getFormattedContributor(contributor) : "";
  const formattedVersion = version ? `${version}.` : "";

  let webwithauthor = `${formattedAuthors}"${title}". <i>${publication}</i>. ${formattedContributor}${formattedVersion}`;
  webwithauthor += `${database}, ${year}. ${location}.`

  return webwithauthor;
}

const citeWebWithout = ({ authors, title, publication, contributor, version, database, year, location }) => {
  const formattedAuthors = authors ? getFormattedAuthors(authors) : "";
  const formattedContributor = contributor ? getFormattedContributor(contributor) : "";
  const formattedVersion = version ? `${version}.` : "";

  let webwithout = `${formattedAuthors}"${title}". <i>${publication}</i>. ${formattedContributor}${formattedVersion}`;
  webwithout += `${database}, ${year}. ${location}.`

  return webwithout;
}

module.exports = {
  citeWebWithAuthor,
  citeWebWithout
};