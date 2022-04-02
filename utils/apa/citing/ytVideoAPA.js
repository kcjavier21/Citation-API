const { getFormattedDate } = require("../helper/dates");
const { getFormattedAuthors } = require("../helper/authors");

const citeYTVideo = ({ authors, date, title, url }) => {
    const formattedAuthors = getFormattedAuthors(authors);
    const formattedDate = getFormattedDate(date);
    const referenceCitation = `${formattedAuthors}${formattedDate} <i>${title}</i> [Video]. ${url}`;

    return referenceCitation;
};


// data = {
//   authors: [
//     {
//       firstName: "Max",
//       middleInitial: "",
//       lastName: "Apsolon",
//     },
//   ],
//   date: new Date(2011, 8, 9),
//   title: " Real ghost girl caught on Video Tape 14",
//   url: "https://www.youtube.com/watch?v=6nyGCbxD848",
// };

// console.log(citeYTVideo(data));
module.exports = { citeYTVideo };