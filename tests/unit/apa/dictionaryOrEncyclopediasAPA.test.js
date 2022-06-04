const { citeDictOrEncyclo } = require("../../../utils/apa/citing/dictionaryOrEncyclopediasAPA");

describe("Dictionary or Encyclopedia  (APA)", () => {
  it("should properly cite (Online with Author)", () => {
    const dictorEncyclo = citeDictOrEncyclo({
      authors: [
        {
          lastName: "Hurthouse",
          firstName: "Ronchester",
          middleInitial: "",
        },
        {
          lastName: "Pettigrove",
          firstName: "Gargoyle",
          middleInitial: "",
        },
      ],
      date: "2016",
      term: "Virtue ethics",
      editors: [
        {
          lastName: "Zalta",
          firstName: "Eric",
          middleInitial: "",
        },
      ],
      edition: "",
      page: "",
      sourceTitle: "Stanford encyclopedia of philosophy",
      url: "https//plato.stanford.edu",
      city: "",
      publisher: "",
    });

    expect(dictorEncyclo).toEqual(
      "Hurthouse, R., & Pettigrove, G. (2016). Virtue ethics. In E. Zalta (Ed.), <i>Stanford encyclopedia of philosophy.</i> https//plato.stanford.edu"
    );
  });

  it("should properly cite (Online without Author)", () => {
    const dictorEncyclo = citeDictOrEncyclo({
      authors: [],
      date: "",
      term: "Heuristic",
      editors: [
        {
          lastName: '',
          firstName: '',
          middleInitial: '',
        },
      ],
      edition: "",
      page: "",
      sourceTitle: "Merriam-Webster’s online dictionary",
      url: "http://www.m-w.com/dictionary/heuristic",
      city: "",
      publisher: "",
    });

    expect(dictorEncyclo).toEqual(
      "Heuristic. (n.d.). In <i>Merriam-Webster’s online dictionary.</i> http://www.m-w.com/dictionary/heuristic"
    );
  });

  it("should properly cite (print with author), No Date and Edition", () => {
    const dictorEncyclo = citeDictOrEncyclo({
      authors: [ { lastName: "Watson", firstName: "John", middleInitial: "H"}],
      date: null,
      term: "Mood induction",
      editors: [
        {
          lastName: '',
          firstName: '',
          middleInitial: '',
        },
      ],
      edition: null,
      page: "667",
      sourceTitle: "APA dictionary of psychology",
      url: "",
      city: "Washington, DC",
      publisher: "American Psychological Association",
    });

    expect(dictorEncyclo).toEqual(
      "Watson, J. H. (n.d.). Mood induction. In <i>APA dictionary of psychology</i> (p.667). Washington, DC: American Psychological Association."
    );
  });

  it("should properly cite (print without author), No Page", () => {
    const dictorEncyclo = citeDictOrEncyclo({
      authors: [],
      date: "2015",
      term: "Mood induction",
      editors: [
        {
          lastName: '',
          firstName: '',
          middleInitial: '',
        },
      ],
      edition: "2",
      page: null,
      sourceTitle: "APA dictionary of psychology",
      url: "",
      city: "Washington, DC",
      publisher: "American Psychological Association",
    });

    expect(dictorEncyclo).toEqual(
      "American Psychological Association. (2015). Mood induction. In <i>APA dictionary of psychology</i> (2 ed.). Washington, DC: American Psychological Association."
    );
  });
});
