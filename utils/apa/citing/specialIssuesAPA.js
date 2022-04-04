const { getFormattedDate } = require("../helper/dates");
const { getFormattedAuthors } = require("../helper/authors");

const citeSpecial = ({ author, date, title, producer }) => {
    const formattedAuthors = getFormattedAuthors (author);
    const formattedDate = getFormattedDate(date);
    const referenceCitation = `${formattedAuthors} ${formattedDate} <i>${title}</i> [Speacial Issue]. ${producer}`;

    return referenceCitation;
};


data = {
 author: [
	{
	    firstName: "L",
	    middleInitial: "",
	    lastName: "Jenkins", 
	},
    {
	    firstName: "R",
	    middleInitial: "",
	    lastName: "Astley", 
	},
   ],
 date: new Date(2013, 0, 0),
 title: "What’s up with Nyan Cat?",
 producer: "International Journal of Memes",
};

console.log(citeSpecial(data));