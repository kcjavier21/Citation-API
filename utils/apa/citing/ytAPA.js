const { getFormattedDate } = require("../helper/dates");
const { getFormattedAuthors } = require("../helper/authors");

const citeYouTube = ({ author, date, title, url }) => {
    const formattedAuthors = getFormattedAuthors (author);
    const formattedDate = getFormattedDate(date);
    const referenceCitation = `${formattedAuthors} ${formattedDate} <i>${title}</i> [Video]. ${url}`;

    return referenceCitation;
};


data = {
    author: [
	{
	    firstName: "M.",
	    middleInitial: "",
	    lastName: "Apsolon", 
	},
   ],
 date: new Date(2011, 8, 9),
 title: "Real ghost girl caught on Video Tape 14",
 url: "http://www.youtube.com/watch?v=6nyGCbxD848",
};

console.log(citeYouTube(data));
module.exports = { citeYouTube };