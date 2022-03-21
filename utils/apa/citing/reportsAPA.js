const { getFormattedDateYear, getFormattedPaperNo, getFormattedLink } = require("../helper/format");

// Hershey Foods Corporation. (2001). 2001 Annual report
// (Working Paper No. 3). Wiley.

const citeReport = ({ author, date, title, report }) => {
    const formattedDate = getFormattedDateYear(date);
    const formattedPaperNo = getFormattedPaperNo(report);
    const formattedLink = getFormattedLink(report);

    let reportCitation = `${author}.${formattedDate} `;
    reportCitation += `${title}${formattedPaperNo}. ${report.publisher}.${formattedLink}`;

    return reportCitation;
}

module.exports = {
    citeReport,
}