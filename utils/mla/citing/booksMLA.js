const { getFormattedAuthors, getFormattedContributor, getFormattedNumber } = require("../helper/format");

// Author’s last name, First name. “Title of the chapter or section.” Title of the e-book, Translated by or edited by First 
// name Last name, Vol. number, Publisher, Year of publication., page number(s). Title of the web site or 
// database, URL

// not required: source (chapters), contributor, version, number, location, optionalElements

// Austen, Jane, and Seth Grahame-Smith. Pride and Prejudice and Zombies. Quirk, 2015. Google 
// Books, books.google.com/books?id=x5xPaPeZzmUC&lpg=PP1&dq=zombies&pg=PP1#
// v=onepage&q=zombies&f=false.

const citeBookWebsite = ( { authors, source, container, contributor, version, number, publisher, year, location, optionalElements }) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedSource = source ? `"${source}".`: "";
    const formattedContributor = getFormattedContributor(contributor);
    const formattedVersion = version ? ` ${version}. `:"";
    const formattedNumber = getFormattedNumber(version, number);
    const formattedLocation = location ? `${location}.`:"";
    const formattedElements = optionalElements ? `${optionalElements}`: "";

    let bookWebsite = `${formattedAuthors}. ${formattedSource}<i>${container}</i>.${formattedContributor}`;
    bookWebsite += `${formattedVersion}${formattedNumber} ${publisher}, ${year}. ${formattedLocation}${formattedElements}`

    return bookWebsite;
}

module.exports = {
    citeBookWebsite,
};