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
        const formattedMiddleInitial = (authors[0].middleInitial != '' && authors[0].middleInitial != null) ? ` ${authors[0].middleInitial}` : "";

        return `${authors[0].lastName}, ${authors[0].firstName}${formattedMiddleInitial}. `;
    } else if (hasTwoAuthors) {
        const formattedMiddleInitial = (authors[0].middleInitial != '' && authors[0].middleInitial != null) ? ` ${authors[0].middleInitial}.` : "";
        const formattedMiddleInitialSecond = (authors[1].middleInitial != '' && authors[1].middleInitial != null) ? ` ${authors[1].middleInitial}.`  : "";

        return `${authors[0].lastName}, ${authors[0].firstName}${formattedMiddleInitial}, and ${authors[1].firstName}${formattedMiddleInitialSecond} ${authors[1].lastName}. `;
    } else if (hasMoreThanTwoAuthors) {
        const formattedMiddleInitial = (authors[0].middleInitial != '' && authors[0].middleInitial != null) ? ` ${authors[0].middleInitial}` : "";

        return `${authors[0].lastName}, ${authors[0].firstName}${formattedMiddleInitial}, et al. `;
    }
}

module.exports = {
    getFormattedAuthors,
};