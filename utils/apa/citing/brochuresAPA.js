const { getFormattedAuthors, getFormattedDate } = require("../helper/format");

// === For Brochures, Pamphlets, and Paintings ===
const citeBrochure = ({ authors, date, title, docType, publisher }) => {
  const formattedAuthor = getFormattedAuthors(authors);
  const formattedYear = getFormattedDate(date);
  const formattedTitle = ` <i>${title}</i>`;
  const formattedDocType = ` [${docType}]. `;
  const formattedPublisher = `${publisher}.`;

  const hasAuthors = formattedAuthor != "";

  if (hasAuthors) {
    return formattedAuthor + formattedYear + formattedTitle + formattedDocType + formattedPublisher;
  } else {
    return formattedPublisher + formattedYear + formattedTitle + formattedDocType + formattedPublisher;
  }
};

module.exports = { citeBrochure };
