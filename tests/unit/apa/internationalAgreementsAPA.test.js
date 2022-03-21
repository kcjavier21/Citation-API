const { citeInternationalAgreement } = require("../../../utils/apa/citing/internationalAgreementsAPA");

describe("International Agreements (APA)", () => {
  it("should properly cite an international agreement", () => {
    const book = citeInternationalAgreement({
      title: "Police Convention",
      year: "1920",
      volume: {
        number: "127",
        name: "L.N.T.S.",
        pageNumber: "433",
      },
    });

    expect(book).toEqual("Police Convention, 1920, 127 L.N.T.S. 433.");
  });
});
