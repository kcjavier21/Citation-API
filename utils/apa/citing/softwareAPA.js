const { getFormattedAuthors } = require("../helper/authors");

const citeSoftware = ({ author, year, title, place, producer }) => {
    const formattedAuthors = getFormattedAuthors (author);
    const formattedYear = year ? year : `n.d.`
    const referenceCitation = `${formattedAuthors} ${formattedYear} <i>${title}</i> [Computer software]. ${place}, ${producer}`;

    return referenceCitation;
};


data = {
    author: [
	{
	    firstName: "A.",
	    middleInitial: "N.",
	    lastName: "Esolang", 
	},
   ],
 year: "2014",
 title: "Obscure Reference Generator",
 place: "Washington",
 producer: "DC: E & K Press",
};

//console.log(citeSoftware(data));
module.exports = { citeSoftware };