const { citeNewspaper, citeOnlineNewspaper } = require("../../../utils/apa/citing/newspapersAPA");

describe("Newspapers (APA)", () => {
  it("should properly cite newspaper", () => {
    const newspaper = citeNewspaper({
      authors: [{ firstName: "John", lastName: "Schwartz" }],
      date: new Date(1993, 8, 30),
      article: "Obesity affects economic, social status",
      newspaper: "The Washington Post",
      pages: {
        start: 1,
        end: 4,
      },
      link: null,
    });

    expect(newspaper).toEqual(
      "Schwartz, J. (1993, September 30). Obesity affects economic, social status. <i>The Washington Post</i>, 1-4."
    );
  });

  it("should properly cite newspaper, No Author", () => {
    const newspaper = citeNewspaper({
      authors: [],
      date: new Date(2018, 4, 9),
      article: "Australians encouraged to age at home",
      newspaper: "The Australian Financial Review",
      pages: {
        start: 5,
        end: null,
      }
    });

    expect(newspaper).toEqual(
      "Australians encouraged to age at home (2018, May 09). <i>The Australian Financial Review</i>, 5."
    );
  });

  it("should properly cite online newspaper, with link", () => {
    const onlineNewspaper = citeOnlineNewspaper({
      authors: [{ firstName: "Anna", lastName: "Tillett" }],
      date: new Date(2018, 4, 9),
      article: "Australians encouraged to age at home",
      newspaper: "The Australian Financial Review",
      pages: {
        start: 5,
        end: null,
      },
      link: "https://www.afr.com/",
    });

    expect(onlineNewspaper).toEqual(
      "Tillett, A. (2018, May 09). Australians encouraged to age at home. <i>The Australian Financial Review</i>, 5. https://www.afr.com/."
    );
  });
});
