const moment = require("moment");
//! Decprecated: This function is integrated in the function below
// const getFormattedDateYear = (date) => {
//   let formattedDateYear;

//   if (date) {
//     let newDate = moment(date);
//     formattedDateYear = newDate.format(" (YYYY).");
//   } else {
//     formattedDateYear = " (n.d.).";
//   }

//   return formattedDateYear;
// };


const getFormattedDate = (date) => {
  let formattedDateYear;

  if (date) {
    if (date.length != 4){  
      let newDate = moment(date);
      formattedDateYear = moment(newDate).format(" (YYYY, MMMM DD).");
    } else 
      return ` (${date}).`;

  } else {
    formattedDateYear = " (n.d.).";
  }

  return formattedDateYear;
};

module.exports = { getFormattedDate }
