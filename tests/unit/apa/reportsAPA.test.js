const { citeReport } = require("../../../utils/apa/citing/reportsAPA");

describe("Reports (APA)", () => {
  it("should properly cite report", () => {
    const report = citeReport({
      author: "Hershey Foods Corporation",
      date: "2001",
      title: "2001 Annual report",
      report: {
        number: 3,
        publisher: "Wiley",
        link: null,
      },
    });

    expect(report).toEqual("Hershey Foods Corporation. (2001). <i>2001 Annual report</i> (Working Paper No. 3). Wiley.");
  });

  it("should properly cite report", () => {
    const report = citeReport({
      author: "Queensland Department of Innovation and Tourism Industry Development",
      date: "2016",
      title: "Advancing tourism 2016",
      report: {
        number: null,
        publisher: null,
        link: "https://www.publications.qld.gov.au/dataset/advancingtourism/resource/df997cf7-14fc-47b1-ac99-ddc7f0975967",
      },
    });

    expect(report).toEqual("Queensland Department of Innovation and Tourism Industry Development. (2016). <i>Advancing tourism 2016</i>." +
    " https://www.publications.qld.gov.au/dataset/advancingtourism/resource/df997cf7-14fc-47b1-ac99-ddc7f0975967");
  });
});
