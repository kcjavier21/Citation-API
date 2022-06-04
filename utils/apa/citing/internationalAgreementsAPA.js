const { getFormattedDetailsAgreement } = require("../helper/format");

const citeInternationalAgreement = ({title, year, volume}) => {
  const formattedYear = year ? year : "n.d.";
  let internationalAgreementCitation;

  const hasDetails = volume.number != null && volume.name != null && volume.pageNumber != null;

  if(hasDetails) {
    const formattedVolume = getFormattedDetailsAgreement(volume);
    internationalAgreementCitation = `${title}, ${formattedYear}, ${formattedVolume}.`;
  } else {
    internationalAgreementCitation = `${title}, ${formattedYear}.`;
  }

  return internationalAgreementCitation;
};

module.exports = { citeInternationalAgreement };
