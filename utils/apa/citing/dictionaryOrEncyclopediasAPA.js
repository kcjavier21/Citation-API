const { getFormattedAuthors, getFormattedEditors, getFormattedEditionAndPage, getFormattedDateYear } = require("../helper/format");

/*
this function is valid in all the three options: with author, without author, and Print.
The distinction will just be done on the frontend on what values will be passed on.
but this function will work on all the 3 options stated above. 
*/

const citeDictOrEncyclo = ({ authors, date, term, editors, edition, page, sourceTitle, url, city, publisher }) => {
  let finalAuthor = getFormattedAuthors(authors);
  let finalDate = `${getFormattedDateYear(date)} `;
  let finalTerm = `${term}.`;
  let finalEditors = getFormattedEditors(editors);
  let finalEdPage = getFormattedEditionAndPage(edition, page);
  
  if (finalEdPage === "") finalSourceTitle = `<i>${sourceTitle}.</i>`;
  else finalSourceTitle = `<i>${sourceTitle}</i>`;

  if (url != "") var finalUrl = ` ${url}`; 
  else finalUrl = "";

  if (city != "" && publisher != "") var finalCityPublisher = ` ${city}: ${publisher}.`; 
  else finalCityPublisher = "";

  //*Online with Author
  if (finalAuthor != "" && finalUrl != "") {
    return finalAuthor + finalDate + finalTerm + " In " + finalEditors + finalSourceTitle + finalEdPage + finalUrl + finalCityPublisher;
  }

  //*Online without Author
  else if (finalAuthor === "" && finalUrl != "") {
    return finalTerm + finalDate + "In " + finalEditors + finalSourceTitle + finalEdPage + finalUrl + finalCityPublisher;
  }

  //*Print with Author
  else if (finalUrl === "" && finalAuthor != "") {
    return finalAuthor + finalDate + finalTerm + " In " + finalEditors + finalSourceTitle + finalEdPage + finalCityPublisher;
  }

  //*Print without Author
  else if (finalUrl === "" && finalAuthor === "") {
    return `${publisher}.` + finalDate + finalTerm + " In " + finalEditors + finalSourceTitle + finalEdPage + finalCityPublisher;
  }
}

module.exports = { citeDictOrEncyclo };
