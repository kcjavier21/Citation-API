const getFormattedLink = ({ link }) => {
  let formattedLink = "";

  if (link == null | link == '') {
    formattedlink = "";
  } else {
    formattedLink = ` ${link}`;
  }

  return formattedLink;
};

module.exports = { getFormattedLink }