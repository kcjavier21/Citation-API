const { getFormattedAuthors } = require("../helper/format");

// === For Brochures, Pamphlets, and Paintings ===
const citeBrochure = ({ authors, year, title, docType, publisher }) => {
  const formattedAuthor = getFormattedAuthors(authors);
  const formattedYear = year ? ` (${year}).` : "(n.d.).";
  const formattedTitle = ` <i>${title}</i>`;
  const formattedDocType = ` [${docType}].`;
  const formattedPublisher = ` ${publisher}.`;

  if (formattedAuthor != "") {
    return formattedAuthor + formattedYear + formattedTitle + formattedDocType + formattedPublisher;
  } else {
    return formattedPublisher + formattedYear + formattedTitle + formattedDocType + formattedPublisher;
  }
};

module.exports = { citeBrochure };
