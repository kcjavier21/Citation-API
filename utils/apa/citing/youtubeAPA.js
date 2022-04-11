const { getFormattedDate } = require("../helper/dates");
const { getFormattedAuthors } = require("../helper/authors");

const citeYoutube = ({ author, date, title, url }) => {
    const formattedAuthors = getFormattedAuthors (author);
    const formattedDate = getFormattedDate(date);
    const referenceCitation = `${formattedAuthors} ${formattedDate} <i>${title}</i> [Video]. ${url}`;

    return referenceCitation;
};


// data = {
//     author: [
// 	{
// 	    firstName: " ",
// 	    middleInitial: " ",
// 	    lastName: "Bellofolletti", 
// 	},
//    ],
//  date: new Date(2009, 3, 8),
//  title: "Ghost caught on surveillance camera",
//  url: "http://www.youtube.com/watch?v=Dq1ms2JhYBI&feature=related",
// };

//console.log(citeYoutube(data));
module.exports = { citeYoutube }; 