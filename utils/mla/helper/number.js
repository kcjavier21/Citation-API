const getFormattedNumber = (version, number) => {
    let formattedNumber;

    if(version && number) {
        formattedNumber = `, vol. ${number}. `;
    } else if (!version && number) {
        formattedNumber = ` vol. ${number}`;
    } else {
        formattedNumber = "";
    }

    return formattedNumber;
}

module.exports = {
    getFormattedNumber,
};