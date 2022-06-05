const { getFormattedAuthors, getFormattedContributor } = require("../helper/format");

const citeElectronicEncyclopedia = ({ authors, title, publication, version, database, year, location }) => {
  const formattedAuthors = authors ? getFormattedAuthors(authors) : "";
  const formattedVersion = version ? `${version}.` : "";
  const formattedLocation = location ? `${location}.` : "";

  let electronicEncyclopedia = `${formattedAuthors}"${title}". <i>${publication}</i>. ${formattedVersion}`;
  electronicEncyclopedia += `${database}, ${year}. ${formattedLocation}`

  return electronicEncyclopedia;
}

const citePrintedEncyclopedia = ({ authors, title, publication, version, database, year, location }) => {
  const formattedAuthors = authors ? getFormattedAuthors(authors) : "";
  const formattedVersion = version ? `${version}.` : "";
  const formattedLocation = location ? ` ${location}.` : "";


  let printedEncyclopedia = `${formattedAuthors}"${title}". <i>${publication}</i>. ${formattedVersion}`;
  printedEncyclopedia += `${database}, ${year}.${formattedLocation}`

  return printedEncyclopedia;
}

module.exports = {
  citeElectronicEncyclopedia,
  citePrintedEncyclopedia,
};