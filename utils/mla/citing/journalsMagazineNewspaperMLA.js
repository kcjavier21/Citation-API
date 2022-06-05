const { getFormattedAuthors, getFormattedContributor, getFormattedVolume, getFormattedPages, getFormattedDate } = require("../helper/format");

//* these functions is applicable to journal Magazine and Newspaper both printed or Online.
// * Title, Journal name, date and DOI or URL are the required values. Others are optional.
const citeJournMagNewsArticle = ( { authors, title, container, volume, issue, date, page, database, urlOrDoi}) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedTitle = `"${title}."`;
    const formattedContainer = ` <i>${container}</i>, `;
    const formattedVolume = getFormattedVolume(false, volume);
    const formattedIssue = issue ? `no. ${issue}, `: "";
    const formattedPage = getFormattedPages(database, urlOrDoi, page);
    const formattedDate = getFormattedDate(database, urlOrDoi, formattedPage, date); 
    const formattedDatabase = database ? `<i>${database}</i>, `: "";

    return formattedAuthors + formattedTitle + formattedContainer + formattedVolume 
            + formattedIssue + formattedDate + formattedPage + formattedDatabase + urlOrDoi;
}

module.exports = {
    citeJournMagNewsArticle,
};
