const { getFormattedAuthors, getFormattedContributor, getFormattedVolume } = require("../helper/format");

const citeElectronicEncyclopedia = ({ authors, title, publication, contributor, version, database, year, location }) => {
  const formattedAuthors = authors ? getFormattedAuthors(authors) : "";
  const formattedContributor = contributor ? getFormattedContributor(contributor) : "";
  const formattedVersion = version ? `${version}.` : "";

  let electronicEncyclopedia = `${formattedAuthors}"${title}". <i>${publication}</i>. ${formattedContributor}${formattedVersion}`;
  electronicEncyclopedia += `${database}, ${year}. ${location}.`

  return electronicEncyclopedia;
}

const citePrintedEncyclopedia = ({ authors, title, publication, contributor, version, database, year, location }) => {
  const formattedAuthors = authors ? getFormattedAuthors(authors) : "";
  const formattedContributor = contributor ? getFormattedContributor(contributor) : "";
  const formattedVersion = version ? `${version}.` : "";

  let printedEncyclopedia = `${formattedAuthors}"${title}". <i>${publication}</i>. ${formattedContributor}${formattedVersion}`;
  printedEncyclopedia += `${database}, ${year}. ${location}.`

  return printedEncyclopedia;
}

module.exports = {
  citeElectronicEncyclopedia,
  citePrintedEncyclopedia,
};