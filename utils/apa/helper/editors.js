const getFormattedEditors = (editors) => {
    let formattededitors;

    formattededitors = _formatWithEditors(editors);
  
    return formattededitors;
  };
  
  const formatEditorName = ({ firstName, lastName, middleInitial }) => {
      // const firstNames = firstName.split(" ");
      let firstInitial = `${firstName[0]}.`;
      let formattedMiddleInitial ='';

      if (middleInitial) { 
        if (middleInitial[1] != ".") formattedMiddleInitial = ` ${middleInitial}.`;
        else formattedMiddleInitial = ` ${middleInitial}`;
      }
    
      return `${firstInitial}${formattedMiddleInitial} ${lastName}`;
    };
  
  const _formatWithEditors = (editors) => {
    const hasOneEditor = editors.length === 1;
    const hasTwoEditors = editors.length === 2;
    const hasMoreThanTwoEditors = editors.length > 2 && editors.length < 20;
    const hasMoreThanTwentyEditors = editors.length > 20;
    const firstEditor = formatEditorName(editors[0]);
  
    let othereditors = [];
    let formattedOtherEditors = "";
    let numeditors = 0;
  
    if (hasOneEditor) {
      return firstEditor + " (Ed.), ";
    } else if (hasTwoEditors) {
      othereditors = _formatTwoeditors(editors);
      numeditors = 2;
    } else if (hasMoreThanTwoEditors) {
      othereditors = _formatMoreThanTwoeditors(editors);
      numeditors = editors.length;
    } else if (hasMoreThanTwentyEditors) {
      othereditors = _formatMoreThanTwentyeditors(editors);
      numeditors = 20;
    }
  
    // Can be eliminated
    for (let otherEditorIndex = 1; otherEditorIndex < numeditors; otherEditorIndex++) {
      formattedOtherEditors += othereditors[otherEditorIndex];
    }
  
    return firstEditor + formattedOtherEditors + " (Eds.), ";
  };
  
  const _formatTwoeditors = (editors) => {
    let othereditors = [];
    
    othereditors[1] = ` & ${formatEditorName(editors[1])}`;

    return othereditors;
  };
  
  const _formatMoreThanTwoeditors = (editors) => {
    let othereditors = [];
  
    for (let editorIndex = 1; editorIndex < editors.length; editorIndex++) {
      const formattedEditorName = formatEditorName(editors[editorIndex]);
      const isLastEditor = editorIndex === editors.length - 1;
  
      if (isLastEditor) {
        othereditors[editorIndex] = `, & ${formattedEditorName}`;
      } else {
        othereditors[editorIndex] = `, ${formattedEditorName}`;
      }
    }
  
    return othereditors;
  };
  
  const _formatMoreThanTwentyeditors = (editors) => {
    let othereditors = [];
  
    for (let editorIndex = 1; editorIndex < 19; editorIndex++) {
      othereditors[editorIndex] = `, ${formatEditorName(editors[editorIndex])}`;
    }
  
    othereditors[19] = `, ... ${formatEditorName(editors[editors.length - 1])}`;
  
    return othereditors;
  };
  
  module.exports = { getFormattedEditors }