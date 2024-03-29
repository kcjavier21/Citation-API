const getFormattedPages = (database, urlOrDoi, { first, last }) => {
  if (first && last) {
    return database || !urlOrDoi ? `pp. ${first}-${last}. `: `pp. ${first}-${last}, `;
  }
  else if (first) {
    return database || !urlOrDoi ? `pp. ${first}. `: `pp. ${first}, `;
  }
  else return "";
}

module.exports = { getFormattedPages };