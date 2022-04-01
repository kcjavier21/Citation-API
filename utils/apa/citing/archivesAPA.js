const { getFormattedAuthors, getFormattedDate } = require("../helper/format");

const citeArchiveSource = ({authors, date, title, description, collection, repository}) => {

  let finalAuthors = getFormattedAuthors(authors);
  let finalDate = getFormattedDate(date); 
  let finalTitle = formatTitle(title, authors);
  let finalDescription = description ? ` [${description}].` : '';
  let finalCollection = formatCollection(collection);
  let finalRepository = formatRepository(repository);
  let finalFormat = ""; 

  const hasNoAuthors = finalAuthors != "";

  if (hasNoAuthors) {
      finalFormat = finalAuthors + finalDate + finalTitle + finalDescription + finalCollection + finalRepository;
  }
  else {
      finalFormat = finalTitle + finalDate + finalDescription + finalCollection + finalRepository;
  }
  return finalFormat;
}

//*Helper function: Formats title based on if there is an existing author or not.
function formatTitle(title, authors) {
  let formattedTitle = "";
  hasTitleAndAuthors = title != "" && authors == "";
  hasTitleAndNoAuthor = title != "" && authors != "";

  if (hasTitleAndAuthors) {
    return formattedTitle = `${title}.`;
  }
  else if (hasTitleAndNoAuthor) {
    return formattedTitle = ` <i>${title}.</i>`;
  }
  else {
    return formattedTitle;
  }
}

//*Helper function: Formats collection details of the archival source.
function formatCollection(collection) {
  //concatenating all collection details into a single variable.
  let formattedCollection = "";

  const hasCollection = isObjEmpty(collection) != true;
  const hasCollectionDetails = collection.Details != "";

  if (hasCollection) {
    if (collection.Name != "") {
      formattedCollection += ` ${collection.Name}`;
    }
    if (hasCollectionDetails) {
      formattedCollection += ` (${collection.Details}).`;
    }
    else {
      formattedCollection += '.';
    }
    return formattedCollection;
  }
  else {
    return formattedCollection = "";
  }
}

//*Helper function: Returns an boolean value if an object is empty or not.
function isObjEmpty(collection) {
  return Object.values(collection).every(x => x === null || x === "");
}

//*Helper function: formats repository, if there is a repository name, a city must also be given,
  //*City can be given without reposity name.
function formatRepository(repository) {
  let formattedRepository = "";

  const hasRepositoryNameAndCity = repository.Name != "" && repository.City != "";
  const hasCityOnly = repository.City != "";

  if (hasRepositoryNameAndCity) {
    return formattedRepository = ` ${repository.Name}, ${repository.City}.`;
  }
  else if (hasCityOnly) {
    return formattedRepository = ` ${repository.City}.`;
  }
  else {
    return formattedRepository;
  }
}

module.exports = { citeArchiveSource };