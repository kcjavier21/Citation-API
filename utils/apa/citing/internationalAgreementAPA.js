const { getFormattedVolumeWithPage } = require("../helper/format");

const citeInternationalAgreement = ({title, year, volume}) => {
  const formattedYear = year ? year : "n.d.";
  const formattedVolume = getFormattedVolumeWithPage(volume);
  const referenceCitation = `${title}, ${formattedYear}, ${formattedVolume}.`;

  return referenceCitation;
};

module.exports = { citeInternationalAgreement };
