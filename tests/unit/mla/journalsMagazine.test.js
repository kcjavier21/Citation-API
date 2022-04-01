const { citeJournMagNewsArticle } = require("../../../utils/mla/citing/journalsMagazineNewspaperMLA");

describe("Electronic Journal (MLA)", () => {
  it("should properly cite Electronic Journal (all values are filled)", () => {
    const JournMagNewsArticle = citeJournMagNewsArticle({
      authors: [{ firstName: "Claire", lastName: "Langhamer" }],
      title: "Love and Courtship in Mid-Twentieth-Century England",
      container: "Historical Journal",
      contributor: { type: null, firstName: null, lastName: null },
      volume: "50",
      issue: 1,
      date: { day: "", month: "", season: "", year: "2007" },
      page: {first: "173", last: "196"},
      database: "ProQuest",
      urlOrDoi: "doi: 10.1017/S0018246X06005966",
    });
    expect(JournMagNewsArticle).toEqual(
      `Langhamer, Claire. "Love and Courtship in Mid-Twentieth-Century England." <i>Historical Journal</i>,`
      + ` vol. 50, no. 1, 2007, pp. 173-196. <i>ProQuest</i>, doi: 10.1017/S0018246X06005966`
    );
  });

  it("should properly cite Electronic Journal with only the required elements", () => {
    const JournMagNewsArticle = citeJournMagNewsArticle({
      authors: [],
      title: "Love and Courtship in Mid-Twentieth-Century England",
      container: "Historical Journal",
      contributor: { type: null, firstName: null, lastName: null },
      volume: "",
      issue: "",
      date: {  day: "", month: "", season: "", year: "2007" },
      page: {first: "", last: ""},
      database: "",
      urlOrDoi: "doi: 10.1017/S0018246X06005966",
    });
    expect(JournMagNewsArticle).toEqual(
      `"Love and Courtship in Mid-Twentieth-Century England." <i>Historical Journal</i>,`
      + ` 2007, doi: 10.1017/S0018246X06005966`
    );
  });

  it("should properly cite Electronic Journal with only the required elements + database", () => {
    const JournMagNewsArticle = citeJournMagNewsArticle({
      authors: [],
      title: "Love and Courtship in Mid-Twentieth-Century England",
      container: "Historical Journal",
      contributor: { type: null, firstName: null, lastName: null },
      volume: "",
      issue: "",
      date: {  day: "", month: "", season: "", year: "2007" },
      page: {first: "", last: ""},
      database: "ProQuest",
      urlOrDoi: "doi: 10.1017/S0018246X06005966",
    });
    expect(JournMagNewsArticle).toEqual(
      `"Love and Courtship in Mid-Twentieth-Century England." <i>Historical Journal</i>,`
      + ` 2007. <i>ProQuest</i>, doi: 10.1017/S0018246X06005966`
    );
  });

  it("should properly cite Electronic Journal with only the required elements (full date)", () => {
    const JournMagNewsArticle = citeJournMagNewsArticle({
      authors: [{firstName: "James Finn", lastName: "Cotter"}],
      title: "Love and Courtship in Mid-Twentieth-Century England",
      container: "Historical Journal",
      contributor: { type: null, firstName: null, lastName: null },
      volume: "15",
      issue: "2",
      date: {  day: "12", month: "September", season: "", year: "2007" },
      page: {first: "121", last: "32"},
      database: "",
      urlOrDoi: "",
    });
    expect(JournMagNewsArticle).toEqual(
      `Cotter, James Finn. "Love and Courtship in Mid-Twentieth-Century England." <i>Historical Journal</i>,`
      + ` vol. 15, no. 2, 12 Sep. 2007, pp. 121-32. `
    );
  });
});