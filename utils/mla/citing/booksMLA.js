const { getFormattedAuthors, getFormattedContributor, getFormattedNumber } = require("../helper/format");

const citeBookWebsite = ( { authors, source, container, contributor, version, number, publisher, year, pages, website, link } ) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedSource = source ? `"${source}".`: "";
    const formattedContributor = getFormattedContributor(contributor);
    const formattedVersion = version ? ` ${version}. `:"";
    const formattedNumber = getFormattedNumber(version, number);
    const formattedPages = pages ? `, ${pages}.`: "";

    let bookWebsite = `${formattedAuthors}. ${formattedSource}<i>${container}</i>.${formattedContributor}`;
    bookWebsite += `${formattedVersion}${formattedNumber} ${publisher}, ${year}.${formattedPages} ${website}, ${link}.`;

    return bookWebsite;
}

const citeBookReader = ({ authors, source, container, contributor, reader, version, number, publisher, year, pages }) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedSource = source ? `"${source}".`: "";
    const formattedContributor = getFormattedContributor(contributor);
    const formattedVersion = version ? ` ${version}. `:"";
    const formattedNumber = getFormattedNumber(version, number);
    const formattedPages = pages ? `, ${pages}.`: "";

    let bookReader = `${formattedAuthors}. ${formattedSource}<i>${container}</i>.${formattedContributor}`;
    bookReader += ` ${reader},${formattedVersion}${formattedNumber} ${publisher}, ${year}.${formattedPages}`

    return bookReader;
}

const citeBookPrinted = ({ authors, source, container, contributor, version, number, publisher, year, pages }) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedSource = source ? `"${source}".`: "";
    const formattedContributor = getFormattedContributor(contributor);
    const formattedVersion = version ? ` ${version}. `:"";
    const formattedNumber = getFormattedNumber(version, number);
    const formattedPages = pages ? `, pp. ${pages}.`: "";

    let bookReader = `${formattedAuthors}. ${formattedSource}<i>${container}</i>.${formattedContributor}`;
    bookReader += `${formattedVersion}${formattedNumber} ${publisher}, ${year}.${formattedPages}`

    return bookReader;
}

module.exports = {
    citeBookWebsite,
    citeBookReader,
    citeBookPrinted,
};