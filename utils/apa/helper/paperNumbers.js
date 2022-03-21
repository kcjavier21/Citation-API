const getFormattedPaperNo = ({ number }) => {
  let formattedNo = "";

  const hasPaperNumber = number;

  if (hasPaperNumber) {
    formattedNo = ` (Working Paper No. ${number})`;
  }

  return formattedNo;
};

const formatEdPage = (Edition, Page) => {
  if (isObjEmpty(formatEdPage) != true) {
       if(Edition != "" && Page != "") {
           return ` (${Edition} ed., ${Page}).`;
       }
       else if (Edition != "") {
           return ` (${Edition} ed.)`;
       }
       else {
           return ` (${Page})`;
       }
   }
   else return "";
}

module.exports = { getFormattedPaperNo };
