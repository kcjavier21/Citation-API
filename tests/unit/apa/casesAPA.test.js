const { citeCase } = require("../../../utils/apa/citing/casesAPA");

describe("Cases (APA)", () => {
  it("should properly cite a case", () => {
    const book = citeCase({
      firstPerson: {
        firstName: "John",
        lastName: "Lessard",
      },
      secondPerson: {
        firstName: "Eric",
        lastName: "Schmidt",
      },
      caseId: "349 F. Supp. 1078",
      year: "1972",
    });

    expect(book).toEqual(
      "Lessard v. Schmidt, 349 F. Supp. 1078, 1972"
    );
  });
});
