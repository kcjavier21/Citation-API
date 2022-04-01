const getFormattedVolume = (version, number) => {
    let formattedVolume;

    if(version && number) {
        formattedVolume = `, vol. ${number}, `;
    } else if (!version && number) {
        formattedVolume = `vol. ${number}, `;
    } else {
        formattedVolume = "";
    }

    return formattedVolume;
}

module.exports = {
    getFormattedVolume,
};