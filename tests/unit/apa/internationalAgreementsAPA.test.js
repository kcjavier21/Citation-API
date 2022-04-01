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

  it("should properly cite an international agreement, No Volume", () => {
    const book = citeInternationalAgreement({
      title: "Treaty of Amsterdam Amending the Treaty on European Union, the Treaties Establishing the European Communities and Certain Related Acts",
      year: "1997",
      volume: {
        number: null,
        name: null,
        pageNumber: null,
      },
    });

    expect(book).toEqual("Treaty of Amsterdam Amending the Treaty on European Union, the Treaties Establishing the European Communities and Certain Related Acts, 1997.");
  });

  it("should properly cite an international agreement, No Volume and Date", () => {
    const book = citeInternationalAgreement({
      title: "Treaty of Amsterdam Amending the Treaty on European Union, the Treaties Establishing the European Communities and Certain Related Acts",
      year: "",
      volume: {
        number: null,
        name: null,
        pageNumber: null,
      },
    });

    expect(book).toEqual("Treaty of Amsterdam Amending the Treaty on European Union, the Treaties Establishing the European Communities and Certain Related Acts, n.d..");
  });
});
