const { getFormattedDate } = require("../helper/dates");
const { getFormattedAuthors } = require("../helper/authors");

const citeSpeech = ({ author, date, title, place, publisher }) => {
    const formattedAuthors = getFormattedAuthors (author);
    const formattedDate = getFormattedDate(date);
    const referenceCitation = `${formattedAuthors} (Ed.). ${formattedDate} <i>${title}</i>. ${place}, ${publisher}`;

    return referenceCitation;
};


data = {
 author: [
	{
	    firstName: "J.",
	    middleInitial: "",
	    lastName: "Smith", 
	},
   ],
 date: new Date(2010),
 title: "Well said! Great speeches in American history",
 place: "Washington",
 publisher: "http://www.youtube.com/watch?v=6nyGCbxD848",
};

console.log(citeSpeech(data));