const { getFormattedAuthors, getFormattedEditors, getFormattedEditionAndPage, getFormattedDateFull } = require("../helper/format");

// this function is valid in all the three options: with author, without author, and Print.
//The distinction will just be done on the frontend on what values will be passed on. but this function will work on all the 3 options stated above.
const citeDictOrEncyclo = ({Authors, Date, Term, Editors, Edition, Page, SourceTitle, Url, City, Publisher}) => {
    let finalAuthor = getFormattedAuthors(Authors);
    let finalDate = getFormattedDateFull(Date);
    let finalTerm = ` ${Term}`;
    let finalEditors = getFormattedEditors(Editors);
    let finalSourceTitle = ` <i>${SourceTitle}</i>`;
    let finalEdPage = getFormattedEditionAndPage(Edition, Page);
    if (Url != "") var finalUrl = ` ${Url}`; else finalUrl = "";
    if (City != "" && Publisher != "") var finalCityPublisher = ` ${City}: ${Publisher}.`; else finalCityPublisher = "";


    if (finalAuthor != "") {
        if (finalUrl != ""){
            return finalAuthor + finalDate + finalTerm + " In" + finalEditors + finalSourceTitle + finalEdPage + finalUrl + finalCityPublisher;
        } 
    }
    else {
        return finalTerm + finalDate + " In" + finalEditors + finalSourceTitle + finalEdPage + finalUrl + finalCityPublisher;
    }
}

module.exports = { citeDictOrEncyclo };
