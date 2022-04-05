const { getFormattedDate, getFormattedPaperNo, getFormattedLink } = require("../helper/format");

const citeReport = ({ author, date, title, report }) => {
    const formattedDate = getFormattedDate(date);
    const formattedPaperNo = getFormattedPaperNo(report);
    const formattedLink = getFormattedLink(report);
    const formattedPublisher = report.publisher ? report.publisher == author ? "" : ` ${report.publisher}.` : "";

    let reportCitation = `${author}.${formattedDate} `;
    reportCitation += `<i>${title}</i>${formattedPaperNo}.${formattedPublisher}${formattedLink}`;

    return reportCitation;
}

module.exports = {
    citeReport,
}