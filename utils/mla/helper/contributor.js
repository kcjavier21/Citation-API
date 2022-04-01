const getFormattedContributor = (contributor) => {
    let formattedContributor;

    if(contributor.type == "Translator") {
        formattedContributor = `Translated by ${contributor.firstName} ${contributor.lastName}, `;
    } else if(contributor.type == "Editor") {
        formattedContributor = `Edited by ${contributor.firstName} ${contributor.lastName}, `;
    } else if (contributor.type == null) {
        formattedContributor = "";
    }

    return formattedContributor;
}

module.exports = {
    getFormattedContributor,
};