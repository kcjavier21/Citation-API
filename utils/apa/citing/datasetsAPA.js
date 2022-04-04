// TODO: Insert here the citation API for Dateset sources
const { getFormattedAuthors, getFormattedDate } =require("../helper/format")

const citeDataset = ({ authors, date, title, website, urlOrDoi }) => {
  let finalAuthor = getFormattedAuthors(authors);
  let finalDate = getFormattedDate(date);
  let finalTitle = ` <i>${title}</i>`;
  let finalWebsite = ` ${website}.`;
  let finalUrlorDoi = ` ${urlOrDoi}`;

  return finalAuthor + finalDate + finalTitle + " [Data set]." + finalWebsite + finalUrlorDoi;
}

module.exports = { citeDataset };