// TODO: Insert here the citation API for Archive sources
const { getFormattedAuthors, getFormattedDate } = require("../helper/format");

//*Main Function
const citeArchiveSource = ({authors, date, title, description, collection, repository}) => {

  let finalAuthors = getFormattedAuthors(authors);
  let finalDate = getFormattedDate(date); 
  let finalTitle = formatTitle(title, authors);
  let finalDescription = description ? ` [${description}].` : '';
  let finalCollection = formatCollection(collection);
  let finalRepository = formatRepository(repository);

  let finalFormat = ""; 
  if (finalAuthors != "") {
      finalFormat = finalAuthors + finalDate + finalTitle + finalDescription + finalCollection + finalRepository;
  }
  else {
      //if no author, title is found at the start of the citation.
      finalFormat = finalTitle + finalDate + finalDescription + finalCollection + finalRepository;
  }
  return finalFormat;
}

//*Helper function: Formats title based on if there is an existing author or not.
function formatTitle(title, authors) {
  let formattedTitle = "";
  if (title != "" && authors == "") {
    return formattedTitle = `${title}.`;
  }
  else if (title != "") {
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

  if (isObjEmpty(collection) != true) {
    if (collection.Name != "") {
      formattedCollection += ` ${collection.Name}`;
    }
    if (collection.Details != "") {
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
  if (repository.Name != "" && repository.City != "") {
    return formattedRepository = ` ${repository.Name}, ${repository.City}.`;
  }
  else if (repository.City != "") {
    return formattedRepository = ` ${repository.City}.`;
  }
  else {
    return formattedRepository;
  }
}

module.exports = { citeArchiveSource };