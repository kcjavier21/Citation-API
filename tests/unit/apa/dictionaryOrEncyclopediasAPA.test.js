const { citeDictOrEncyclo } = require("../../../utils/apa/citing/dictionaryOrEncyclopediasAPA");

describe("Dictionary or Encyclopedia  (APA)", () => {
  it("should properly cite (Online with Author)", () => {
    const dictorEncyclo = citeDictOrEncyclo({
        Authors: [
          {
            lastName: "Hurthouse",
            firstName: "Ronchester",
            middleInitial: ""
          },
          {
            lastName: "Pettigrove",
            firstName: "Gargoyle",
            middleInitial: ""
          }
        ],
        Date: "2016-04-25T21:30:05",
        Term: "Virtue ethics",
        Editors: [
          {
            lastName: "Zalta",
            firstName: "Eric",
            middleInitial: ""
          }
        ],
        Edition: "",
        Page: "",
        SourceTitle: "Stanford encyclopedia of philosophy",
        Url: "https//plato.stanford.edu",
        City: "",
        Publisher: ""
      });

    expect(dictorEncyclo).toEqual(
      "Hurthouse, R., & Pettigrove, G. (2016). Virtue ethics. In E. Zalta (Ed.), <i>Stanford encyclopedia of philosophy.</i> https//plato.stanford.edu"
    );
  });

  it("should properly cite (Online without Author)", () => {
    const dictorEncyclo = citeDictOrEncyclo({
        Authors: [

        ],
        Date: "",
        Term: "Heuristic",
        Editors: [
          
        ],
        Edition: "",
        Page: "",
        SourceTitle: "Merriam-Webster’s online dictionary",
        Url: "http://www.m-w.com/dictionary/heuristic",
        City: "",
        Publisher: ""
      });

    expect(dictorEncyclo).toEqual(
      "Heuristic. (n.d.). In <i>Merriam-Webster’s online dictionary.</i> http://www.m-w.com/dictionary/heuristic"
    );
  });

  it("should properly cite (print)", () => {
    const dictorEncyclo = citeDictOrEncyclo({
        Authors: [

        ],
        Date: "2015",
        Term: "Mood induction",
        Editors: [
          
        ],
        Edition: "2",
        Page: "667",
        SourceTitle: "APA dictionary of psychology",
        Url: "",
        City: "Washington, DC",
        Publisher: "American Psychological Association"
      });

    expect(dictorEncyclo).toEqual(
      "American Psychological Association. (2015). Mood induction. In <i>APA dictionary of psychology</i> (2 ed., p.667). Washington, DC: American Psychological Association."
    );
  });

});
