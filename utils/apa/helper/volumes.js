const moment = require("moment");

const getFormattedVolume = ({ volume, issue }) => {
  let formattedVolume;

  if (volume && issue) {
    formattedVolume = `${volume}(${issue}), `;
  } else if (volume && !issue) {
    formattedVolume = `${volume}, `;
  } else {
    formattedVolume = "";
  }

  return formattedVolume;
};

const getFormattedEditionVolume = ({ edition, volume }) => {
  let ordinalEdition = moment.localeData().ordinal(edition);
  let formattedEditionVolume;

  const hasEditionVolume = edition && volume;
  const hasEditionOnly = edition && !volume;
  const noEditionVolume = !edition && !volume;

  if (hasEditionVolume) {
    formattedEditionVolume = ` (${ordinalEdition} ed., Vol. ${volume})`;
  } else if (hasEditionOnly) {
    formattedEditionVolume = ` (${ordinalEdition} ed.)`;
  } else if (noEditionVolume) {
    formattedEditionVolume = "";
  }

  return formattedEditionVolume;
};

// for Book Chapter
const getFormattedVolumePage = (volume, pages) => {
  let formattedVolumePage;
  const hasVolumeAndPage = (volume != null && volume != '') && pages.start != null;
  const hasPageOnly = (volume === null || volume != undefined) && pages.start != null;

  if(hasVolumeAndPage) {
    formattedVolumePage = `(Vol. ${volume}, pp. ${getFormattedPages(pages)}). `;
  } else if(hasPageOnly) {
    formattedVolumePage = `(pp. ${getFormattedPages(pages)}). `;
  }

  return formattedVolumePage;
}

const getFormattedPages = ({ start, end }) => {
  const hasStartPageAndEndPage = start != null && (end != '' && end != null);
  const hasStartPageOnly = start != null && (end == '' || end == null);
  const hasNoPages = start == '' && end == '';
  let formattedPages;
 
  if(hasStartPageAndEndPage) {
    formattedPages = `${start}-${end}`;
  } else if(hasStartPageOnly) {
    formattedPages = `${start}`;
  } else if(hasNoPages) {
    formattedPages = "";
  }

  return formattedPages;
}

const getFormattedDetailsAgreement = ({number, name, pageNumber}) => {

  return `${number} ${name} ${pageNumber}`.trim();

};

module.exports = { getFormattedVolume, getFormattedEditionVolume, getFormattedVolumePage , getFormattedDetailsAgreement, getFormattedPages }