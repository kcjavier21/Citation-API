const { getFormattedAuthors } = require("../helper/authors");

const citeSection = ({ author, year, title, producer }) => {
    const formattedAuthors = getFormattedAuthors (author);
    const formattedYear = year ? year : `n.d.`
    const referenceCitation = `${formattedAuthors} (Eds.). ${formattedYear} <i>${title}</i> [Special section]. ${producer}, 32(2), 415–565.`;

    return referenceCitation;
};


data = {
 author: [
	{
	    firstName: "L.",
	    middleInitial: "",
	    lastName: "Jenkins", 
	},
    {
	    firstName: "R   .",
	    middleInitial: "",
	    lastName: "Astley", 
	},
   ],
 year: "2012",
 title: "Beyond the LOLcats: Maru, Nyan Cat, and more",
 producer: "International Journal of Memes",
};

console.log(citeSection(data));
module.exports = { citeSection };