const { getFormattedAuthors } = require("../helper/format");
const moment = require("moment");

// Author’s Last name, First name. “Title of the Article or Individual Page.” Title of the website, Name of the publisher, Date of publication, URL. 

const citeWebWithAuthor = ({ authors, title, website, publication, date, location }) => {
  const formattedAuthors = authors ? getFormattedAuthors(authors) : "";
  const newDate = moment(date);
  const formattedDate = date ? `${moment(newDate).format("D MMM. YYYY")}, ` : "";


  let webwithauthor = `${formattedAuthors}"${title}." <i>${website}</i>, ${publication}, ${formattedDate}${location}.`

  return webwithauthor;
}

const citeWebWithout = ({ authors, title, website, publication, date, location }) => {
  const formattedAuthors = authors ? getFormattedAuthors(authors) : "";
  const newDate = moment(date);
  const formattedDate = date ? `${moment(newDate).format("D MMMM YYYY")}, ` : "";
  
  let webwithout = `${formattedAuthors}"${title}." <i>${website}</i>, ${publication}, ${formattedDate}${location}.`;

  return webwithout;
}

module.exports = {
  citeWebWithAuthor,
  citeWebWithout
};