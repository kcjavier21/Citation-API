//* format for the date of MLA
//* This is for a specific condition where if database is given or it is the end of the citation, the date or page before it, should end with " . " else " , ";
const getFormattedDate = (database, urlOrDoi, page, {day, month, season, year}) => {
  let formattedMonth = "";

  if(month && month.length > 4) {
    formattedMonth = month[0] + month[1] + month[2] + '.';
  } else if (month == "July" || month == "july"){
    formattedMonth = "July";
  } else if (month == "May" || month == "may") {
    formattedMonth = "May";
  } 

  if (day && formattedMonth && year) {
    return (database || !urlOrDoi) && !page ? `${day} ${formattedMonth} ${year}. `: `${day} ${formattedMonth} ${year}, `;
  } 
  else if (formattedMonth && year) {
    return (database || !urlOrDoi) && !page ? `${formattedMonth} ${year}. `: `${formattedMonth} ${year}, `;
  }
  else if (season && year) {
    return (database || !urlOrDoi) && !page ? `${season} ${year}. `: `${season} ${year}, `;
  }
  else if (year) {
    return (database || !urlOrDoi) && !page ? `${year}. `: `${year}, `;
  }
} 

module.exports = { getFormattedDate };