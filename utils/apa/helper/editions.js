const getFormattedEditionAndPage = (edition, page) => {
  if (edition && page) {
    return ` (${edition} ed., p.${page}).`;
  } else if (edition && !page) {
    return ` (${edition} ed.)`;
  } else if (!edition && page) {
    return ` (p.${page})`;
  } else {
    return "";
  }
};

module.exports = { getFormattedEditionAndPage };
