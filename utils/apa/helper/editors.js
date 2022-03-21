const getFormattedEditors = (editors) => {
    console.log(editors);
  let formattedEditors = "";
  let editorsCount = editors.length;
  let ctr = 0;

  if (editorsCount > 1) {
    while (ctr < editorsCount - 1) {
      //if Editors is 21 or more list Editors up to 19 then add ellipse (three dots) and put the last author.
      if (ctr == 18 && editorsCount - 1 >= 20) {
        if (editors[ctr].firstName != "" && editors[ctr].lastName != "") {
          return (formattedEditors += ` ... ${editors[editorsCount - 1].firstName}., ${
            editors[editorsCount - 1].lastName
          }`);
        } else if (editors[ctr].firstName != "") {
          return (formattedEditors += ` ... ${editors[editorsCount - 1].firstName}.`);
        } else {
          formattedEditors += `...${editors[ctr].lastName}`;
        }
      }

      //concatenate all Editors until before the last author in the array.
      if (editors[ctr].firstName != "" && editors[ctr].lastName != "") {
        formattedEditors += ` ${editors[ctr].firstName}., ${editors[ctr].lastName},`;
      } else if (editors[ctr].firstName != "") {
        formattedEditors += ` ${editors[ctr].firstName}.,`;
      } else {
        formattedEditors += ` ${editors[ctr].lastName},`;
      }
      ctr++;
    }

    //this concatenates the last author in the array and returns it.
    if (editors[ctr].firstName != "" && editors[ctr].lastName != "") {
      return (formattedEditors += ` & ${editors[ctr].firstName}., ${editors[ctr].lastName}`);
    } else if (editors[ctr].firstName != "") {
      return (formattedEditors += ` & ${editors[ctr].firstName}.`);
    } else {
      return (formattedEditors += ` & ${editors[ctr].lastName}`);
    }
  }

  //if there is only 1 author in the array.
  else {
    //check first if this single author is an empty string or not.
    if (editors[0]) {
      if (editors[ctr].firstName != "" && editors[ctr].lastName != "") {
        return (formattedEditors += ` ${editors[ctr].firstName}., ${editors[ctr].lastName}`);
      } else if (editors[ctr].firstName != "") {
        return (formattedEditors += ` ${editors[ctr].firstName}.`);
      } else {
        return (formattedEditors += ` ${editors[ctr].lastName}`);
      }
    }
    //if this single author contains empty string then it will return empty.
    else return formattedEditors;
  }
};

module.exports = { getFormattedEditors };
