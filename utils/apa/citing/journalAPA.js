const { getFormattedAuthors } = require("../helper/authors");

const citeJournal = ({ author, year, title, titlecase, page }) => {
    const formattedAuthors = getFormattedAuthors;
	const formattedYear = year ? year : `n.d.`
    const referenceCitation = `${formattedAuthors}. (${formattedYear}). <i>${title}</i> . ${titlecase}, 42(Suppl. 2), ${page}.`;

    return referenceCitation;
};


data = {
 author: [
	{
	    firstName: "D.",
	    middleInitial: "",
	    lastName: "Vahey", 
	},
    {
	    firstName: "L.",
	    middleInitial: "",
	    lastName: "Aiken", 
	},
   ],
 year: "2004",
 title: "Nurse burnout and patient satisfaction",
 titlecase: "Medical Care",
 page: "57-66",
};

console.log(citeJournal(data));
module.exports = { citeJournal };