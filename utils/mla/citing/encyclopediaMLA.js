const { getFormattedAuthors, getFormattedContributor, getFormattedVolume } = require("../helper/format");

const citeElectronicEncyclopedia = ({ authors, title, publication, contributor, version, database, year, location }) => {
  const formattedAuthors = authors ? getFormattedAuthors(authors) : "";
  const formattedContributor = contributor ? getFormattedContributor(contributor) : "";
  const formattedVersion = version ? `${version}.` : "";
  const formattedLocation = location ? `${location}.` : "";

  let electronicEncyclopedia = `${formattedAuthors}"${title}". <i>${publication}</i>. ${formattedContributor}${formattedVersion}`;
  electronicEncyclopedia += `${database}, ${year}. ${formattedLocation}`

  return electronicEncyclopedia;
}

const citePrintedEncyclopedia = ({ authors, title, publication, contributor, version, database, year, location }) => {
  const formattedAuthors = authors ? getFormattedAuthors(authors) : "";
  const formattedContributor = contributor ? getFormattedContributor(contributor) : "";
  const formattedVersion = version ? `${version}.` : "";
  const formattedLocation = location ? ` ${location}.` : "";


  let printedEncyclopedia = `${formattedAuthors}"${title}". <i>${publication}</i>. ${formattedContributor}${formattedVersion}`;
  printedEncyclopedia += `${database}, ${year}.${formattedLocation}`

  return printedEncyclopedia;
}

module.exports = {
  citeElectronicEncyclopedia,
  citePrintedEncyclopedia,
};