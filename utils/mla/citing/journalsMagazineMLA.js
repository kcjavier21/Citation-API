const { getFormattedAuthors, getFormattedContributor, getformattedVolume } = require("../helper/format");


// * Title, Journal name, Year and DOI or URL are the required values. Others are optional.
const citeElectronicJournalArticle = ( { authors, title, journal, contributor, volume, issue, year, page, database, urlOrDoi}) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedTitle = `"${title}.",`;
    const formattedJournal = ` <i>${journal}</i>,`;
    const formattedContributor = getFormattedContributor(contributor);
    const formattedVolume = getformattedVolume(contributor, volume);
    const formattedIssue = issue ? `no. ${issue}, `: "";
    const formattedYear = `${year}, `;
    const formattedPage = page ? `${page}, `: "";
    const formattedDatabase = database ? `${database}, `: "";


    let electronicJournalArticle = formattedAuthors + formattedTitle + formattedJournal + formattedContributor;
    electronicJournalArticle += formattedVolume + formattedIssue + formattedYear + formattedPage + formattedDatabase + urlOrDoi;

    return electronicJournalArticle;
}

module.exports = {
    citeElectronicJournalArticle,
};

//TODO: Ask mau about the volume function. 