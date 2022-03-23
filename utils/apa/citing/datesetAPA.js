// TODO: Insert here the citation API for Dateset sources

const citeDataset = (Authors, Year, Title, Website, UrlorDoi ) => {
  let finalAuthor = formatAuthors(Authors);
  let finalDate = formatDate(Year);
  let finalTitle = ` <i>${Title}</i>`;
  let finalWebsite = ` ${Website}.`;
  let finalUrlorDoi = ` ${UrlorDoi}`;

  return finalAuthor + finalDate + finalTitle + " [Dataset]." + finalWebsite + finalUrlorDoi;
}