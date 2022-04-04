const getFormattedAuthors = (authors) => {
  let formattedAuthors;

  const noAuthor = authors.length === 0;

  if (noAuthor) {
    formattedAuthors = "";
  } else {
    formattedAuthors = _formatWithAuthors(authors);
  }

  return formattedAuthors;
};

const formatAuthorName = ({ firstName, lastName, middleInitial, role }) => {
    // const firstNames = firstName.split(" ");
    let firstInitial = ` ${firstName[0]}.`;
    let formattedMiddleInitial = '';

    if (middleInitial) { 
      if (middleInitial[1] != ".") formattedMiddleInitial = ` ${middleInitial}.`;
      else formattedMiddleInitial = ` ${middleInitial}`;
    }

    if (role){
      return `${lastName},${firstInitial}${formattedMiddleInitial} (${role})`;
    }

    return `${lastName},${firstInitial}${formattedMiddleInitial}`;
  }

const _formatWithAuthors = (authors) => {
  const hasOneAuthor = authors.length === 1;
  const hasTwoAuthors = authors.length === 2;
  const hasMoreThanTwoAuthors = authors.length > 2 && authors.length < 20;
  const hasMoreThanTwentyAuthors = authors.length > 20;
  const firstAuthor = formatAuthorName(authors[0]);

  let otherAuthors = [];
  let formattedOtherAuthors = "";
  let numAuthors = 0;

  if (hasOneAuthor) {
    return firstAuthor;
  } else if (hasTwoAuthors) {
    otherAuthors = _formatTwoAuthors(authors);
    numAuthors = 2;
  } else if (hasMoreThanTwoAuthors) {
    otherAuthors = _formatMoreThanTwoAuthors(authors);
    numAuthors = authors.length;
  } else if (hasMoreThanTwentyAuthors) {
    otherAuthors = _formatMoreThanTwentyAuthors(authors);
    numAuthors = 20;
  }

  // Can be eliminated
  for (let otherAuthorIndex = 1; otherAuthorIndex < numAuthors; otherAuthorIndex++) {
    formattedOtherAuthors += otherAuthors[otherAuthorIndex];
  }

  return firstAuthor + formattedOtherAuthors;
};

const _formatTwoAuthors = (authors) => {
  let otherAuthors = [];

  otherAuthors[1] = `, & ${formatAuthorName(authors[1])}`;

  return otherAuthors;
};

const _formatMoreThanTwoAuthors = (authors) => {
  let otherAuthors = [];

  for (let authorIndex = 1; authorIndex < authors.length; authorIndex++) {
    const formattedAuthorName = formatAuthorName(authors[authorIndex]);
    const isLastAuthor = authorIndex === authors.length - 1;

    if (isLastAuthor) {
      otherAuthors[authorIndex] = `, & ${formattedAuthorName}`;
    } else {
      otherAuthors[authorIndex] = `, ${formattedAuthorName}`;
    }
  }

  return otherAuthors;
};

const _formatMoreThanTwentyAuthors = (authors) => {
  let otherAuthors = [];

  for (let authorIndex = 1; authorIndex < 19; authorIndex++) {
    otherAuthors[authorIndex] = `, ${formatAuthorName(authors[authorIndex])}`;
  }

  otherAuthors[19] = `, ... ${formatAuthorName(authors[authors.length - 1])}`;

  return otherAuthors;
};

module.exports = { getFormattedAuthors }