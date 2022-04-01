const { getFormattedAuthors, getFormattedContributor, getFormattedVolume } = require("../helper/format");

const citeBookWebsite = ( { authors, source, container, contributor, version, volume, publisher, year, pages, website, link } ) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedSource = source ? `"${source}".`: "";
    const formattedContributor = getFormattedContributor(contributor);
    const formattedVersion = version ? ` ${version}. `:"";
    const formattedVolume = getFormattedVolume(version, volume);
    const formattedPages = pages ? `, ${pages}.`: "";

    let bookWebsite = `${formattedAuthors}${formattedSource}<i>${container}</i>.${formattedContributor}`;
    bookWebsite += `${formattedVersion}${formattedVolume} ${publisher}, ${year}.${formattedPages} ${website}, ${link}.`;

    return bookWebsite;
}

const citeBookReader = ({ authors, source, container, contributor, reader, version, volume, publisher, year, pages }) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedSource = source ? `"${source}".`: "";
    const formattedContributor = getFormattedContributor(contributor);
    const formattedVersion = version ? `${version}. `:"";
    const formattedVolume = getFormattedVolume(version, volume);
    const formattedPages = pages ? `, ${pages}.`: "";

    let bookReader = `${formattedAuthors}${formattedSource}<i>${container}</i>.${formattedContributor}`;
    bookReader += ` ${reader}, ${formattedVersion}${formattedVolume}${publisher}, ${year}.${formattedPages}`

    return bookReader;
}

const citeBookPrinted = ({ authors, source, container, contributor, version, volume, publisher, year, pages }) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedSource = source ? `"${source}".`: "";
    const formattedContributor = getFormattedContributor(contributor);
    const formattedVersion = version ? ` ${version}. `:"";
    const formattedVolume = getFormattedVolume(version, volume);
    const formattedPages = pages ? `, pp. ${pages}.`: "";

    let bookReader = `${formattedAuthors}${formattedSource}<i>${container}</i>. ${formattedContributor}`;
    bookReader += `${formattedVersion}${formattedVolume}${publisher}, ${year}.${formattedPages}`

    return bookReader;
}

module.exports = {
    citeBookWebsite,
    citeBookReader,
    citeBookPrinted,
};