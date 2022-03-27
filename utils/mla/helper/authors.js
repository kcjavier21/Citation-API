const getFormattedAuthors = (authors) => {
    let formattedAuthors;

    const noAuthor = authors.length === 0;

    if (noAuthor) {
      formattedAuthors = "";
    } else {
      formattedAuthors = _formatWithAuthors(authors);
    }
  
    return formattedAuthors;
}

const _formatWithAuthors = (authors) => {
    const hasOneAuthor = authors.length === 1;
    const hasTwoAuthors = authors.length === 2;
    const hasMoreThanTwoAuthors = authors.length > 2;

    if (hasOneAuthor) {
        return `${authors[0].lastName}, ${authors[0].firstName}`;
    } else if (hasTwoAuthors) {
        return `${authors[0].lastName}, ${authors[0].firstName}, and ${authors[1].firstName} ${authors[1].lastName}`
    } else if (hasMoreThanTwoAuthors) {
        return _formatMoreThanTwoAuthors(authors);
    }
}

const _formatMoreThanTwoAuthors = (authors) => {
    let listOfAuthors = "";
    let lastAuthor;
    
    for(let authorIndex=0; authorIndex < authors.length-1; authorIndex++) {
        if(authorIndex === authors.length-1) {
            lastAuthor  `and ${authors[authorIndex].firstName} ${authors[authorIndex].lastName}`;
        } else {
            listOfAuthors += `${authors[authorIndex].lastName}, ${authors[authorIndex].firstName}, `
        }
    }

    return listOfAuthors;
}

module.exports = {
    getFormattedAuthors,
};