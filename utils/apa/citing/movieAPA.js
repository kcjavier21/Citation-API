const { getFormattedAuthors } = require("../helper/authors");

const citeMovie = ({ author, year, title, company }) => {
    const formattedAuthors = getFormattedAuthors (author);
	const formattedYear = year ? year : `n.d.`
    const referenceCitation = `${formattedAuthors}. (${formattedYear}). <i>${title}</i> [Motion picture]. ${company}`;

    return referenceCitation;
};


data = {
 author: [
	{
	    firstName: "F.",
	    middleInitial: "",
	    lastName: "Davidson",
		role: "Producer", 
	},
    {
	    firstName: "J.",
	    middleInitial: "",
	    lastName: "Davidson",
		role: "Director",  
	},
   ],
 year: "2000",
 title: "B. F. Skinner: A fresh appraisal",
 company: "USA: Davidson Films",
};

console.log(citeMovie(data));
module.exports = { citeMovie };