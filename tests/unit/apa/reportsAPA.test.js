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
});
