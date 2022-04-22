const { getFormattedAuthors } = require("../helper/authors");

const citeSingle = ({ author, year, title, company }) => {
    const formattedAuthors = getFormattedAuthors (author);
	const formattedYear = year ? year : `n.d.`
    const referenceCitation = `${formattedAuthors}. (${formattedYear}). <i>${title}</i> (Season 4, Episode 17) [TV series episode]. ${company}`;

    return referenceCitation;
};


data = {
 author: [
	{
	    firstName: "D.",
	    middleInitial: "",
	    lastName: "Egan",
		role: "Writer", 
	},
    {
	    firstName: "J.",
	    middleInitial: "",
	    lastName: "Alexander",
		role: "Director",  
	},
   ],
 year: "2005",
 title: "Failure to communicate",
 company: "House. Fox Broadcasting",
};

//console.log(citeSingle(data));
module.exports = { citeSingle };