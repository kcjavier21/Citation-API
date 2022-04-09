const { getFormattedAuthors } = require("../helper/authors");

const citeEpisode = ({ author, year, title, producer, company }) => {
    const formattedAuthors = getFormattedAuthors (author);
	const formattedYear = year ? year : `n.d.`
    const referenceCitation = `${formattedAuthors}. (${formattedYear}). 
    <i>${title}</i> (Season 4, Episode 17) [TV series episode]. ${producer} (Executive producer) ${company}`;

    return referenceCitation;
};


data = {
 author: [
	{
	    firstName: "D.",
	    middleInitial: "",
	    lastName: "Egan",
		role: "Producer", 
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
 producer: "In D. Shore",
 company: "Fox Broadcasting",
};

console.log(citeEpisode(data));
module.exports = { citeEpisode };