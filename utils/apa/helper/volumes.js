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

  const hasVolumeAndPage = volume && pages;
  const hasPageOnly = !volume && pages;

  if(hasVolumeAndPage) {
    formattedVolumePage = `(Vol. ${volume}, pp. ${_formatPages(pages)}). `;
  } else if(hasPageOnly) {
    formattedVolumePage = `(pp. ${_formatPages(pages)}). `;
  }

  return formattedVolumePage;
}

const _formatPages = ({ start, end }) => {
  const hasStartPageAndEndPage = start && end;
  const hasStartPageOnly = start && !end;
  let formattedPages;
 
  if(hasStartPageAndEndPage) {
    formattedPages = `${start}-${end}`;
  } else if(hasStartPageOnly) {
    formattedPages = `${start}`;
  }

  return formattedPages;
}

const getFormattedDetailsAgreement = ({number, name, pageNumber}) => {
  const hasDetails = number && name && pageNumber;

  if(hasDetails) {
    return `${number} ${name} ${pageNumber}`.trim();
  } else {
    return "";
  }
};

module.exports = { getFormattedVolume, getFormattedEditionVolume, getFormattedVolumePage , getFormattedDetailsAgreement }