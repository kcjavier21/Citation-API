const citeUnPublishedManuscript = ({ authors, year, title }) => {
    let formattedAuthors = "";
  
    if (authors.length === 1) {
      formattedAuthors = `${authors[0].lastName}, ${authors[0].firstName[0]}.`;
    } else if (formattedAuthors.length === 2) {
      const firstAuthor = `${authors[0].lastName}, ${authors[0].firstName[0]}.`;
      const secondAuthor = `${authors[1].lastName}, ${authors[1].firstName[0]}.`;
      formattedAuthors = `${firstAuthor} & ${secondAuthor}`;
    } else {
      authors.map((author, index) => {
        if (authors.length != index + 1) {
          const formattedAuthor = `${author.lastName}, ${author.firstName[0]}., `;
          formattedAuthors = formattedAuthors.concat(formattedAuthor);
        } else {
          const formattedAuthor = `& ${author.lastName}, ${author.firstName[0]}.`;
          formattedAuthors = formattedAuthors.concat(formattedAuthor);
        }
      });
    }
  
    const referenceCitation = `${formattedAuthors} (${year}). ${title}. Unpublished manuscript.`;
  
    return referenceCitation;
  };
  
//   data = {
//     authors: [
//       { firstName: "Rick", lastName: "Enikolopov" },
//       { firstName: "Alexander", lastName: "Makarin" },
//       { firstName: "Max", lastName: "Petrova" },
//     ],
//     year: "2018",
//     title: "Social media and protest participation: Evidence from Russia",
//   };

// console.log(citeUnPublishedManuscript(data));
  
module.exports = { citeUnPublishedManuscript };