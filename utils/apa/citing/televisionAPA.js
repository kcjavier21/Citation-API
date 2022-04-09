const { getFormattedDate } = require("../helper/dates");
const { getFormattedAuthors } = require("../helper/authors");

const citeTelevision = ({ author, date, title, publisher }) => {
    const formattedAuthors = getFormattedAuthors (author);
    const formattedDate = getFormattedDate(date);
    const referenceCitation = `${formattedAuthors} ${formattedDate} <i>${title}</i> [Television broadcast]. ${publisher}`;

    return referenceCitation;
};


// data = {
//  author: [
// 	{
// 	    firstName: "J.",
// 	    middleInitial: "G.",
// 	    lastName: "Smith", 
// 	},
//    ],
//  date: new Date(1999, 8, 19),
//  title: "Every day News",
//  publisher: "West Broadcasting",
// };

//console.log(citeTelevision(data));
module.exports = { citeTelevision };