const { citeNewspaper } = require("../../../utils/apa/citing/newspapersAPA");

describe("Newspapers (APA)", () => {
  it("should properly cite newspaper", () => {
    const newspaper = citeNewspaper({
      authors: [{ firstName: "John", lastName: "Schwartz" }],
      date: new Date(1993, 8, 30),
      article: "Obesity affects economic, social status",
      newspaper: {
        title: "The Washington Post",
        pages: "1-4",
      },
    });

    expect(newspaper).toEqual(
      "Schwartz, J. (1993, September 30). Obesity affects economic, social status. <i>The Washington Post</i>, 1-4."
    );
  });
});
