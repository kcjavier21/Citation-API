const { getFormattedAuthors, getFormattedContributor, getFormattedVolume } = require("../helper/format");

const citeBookWebsite = ( { authors, container, version, volume, publisher, year, pages, website, link } ) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedVersion = version ? ` ${version}. `:"";
    const formattedVolume = getFormattedVolume(version, volume);
    const formattedPages = pages ? `, ${pages}.`: "";

    let bookWebsite = `${formattedAuthors}<i>${container}</i>.`;
    bookWebsite += `${formattedVersion}${formattedVolume} ${publisher}, ${year}.${formattedPages} ${website}, ${link}.`;

    return bookWebsite;
}

const citeBookReader = ({ authors, container, reader, version, volume, publisher, year, pages }) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedVersion = version ? `${version}. `:"";
    const formattedVolume = getFormattedVolume(version, volume);
    const formattedPages = pages ? `, ${pages}.`: "";

    let bookReader = `${formattedAuthors}<i>${container}</i>.`;
    bookReader += ` ${reader}, ${formattedVersion}${formattedVolume}${publisher}, ${year}.${formattedPages}`

    return bookReader;
}

const citeBookPrinted = ({ authors, container,  version, volume, publisher, year, pages }) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedVersion = version ? ` ${version}. `:"";
    const formattedVolume = getFormattedVolume(version, volume);
    const formattedPages = pages ? `, pp. ${pages}.`: "";

    let bookReader = `${formattedAuthors}<i>${container}</i>. `;
    bookReader += `${formattedVersion}${formattedVolume}${publisher}, ${year}.${formattedPages}`

    return bookReader;
}

module.exports = {
    citeBookWebsite,
    citeBookReader,
    citeBookPrinted,
};