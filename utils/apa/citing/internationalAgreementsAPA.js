const { getFormattedDetailsAgreement } = require("../helper/format");

const citeInternationalAgreement = ({title, year, volume}) => {
  const formattedYear = year ? year : "n.d.";
  const formattedVolume = getFormattedDetailsAgreement(volume);
  let internationalAgreementCitation;

  const hasDetails = volume.number && volume.name && volume.pageNumber;

  if(hasDetails) {
    internationalAgreementCitation = `${title}, ${formattedYear}, ${formattedVolume}.`;
  } else {
    internationalAgreementCitation = `${title}, ${formattedYear}.`;
  }

  return internationalAgreementCitation;
};

module.exports = { citeInternationalAgreement };
