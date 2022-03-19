const getFormattedPaperNo = ({ number }) => {
  let formattedNo = "";

  const hasPaperNumber = number;

  if (hasPaperNumber) {
    formattedNo = ` (Working Paper No. ${number})`;
  }

  return formattedNo;
};

module.exports = { getFormattedPaperNo };
