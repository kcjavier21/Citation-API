const { citeBrochure } = require("../../../utils/apa/citing/brochuresAPA")

describe("Brochure, Pamphlet, or Painting (APA)", () => {

  //*Test case 1
    it("should properly cite with Author", () => {
      const dictorEncyclo = citeBrochure({
        authors: [
          {
            lastName: "Wyeth",
            firstName: "Aldrige",
            middleInitial: ""
          }
         ],
        date: "1948",
        title: "Christina's world",
        docType: "Painting",
        publisher: "Museum of Modern Art"
      });
      expect(dictorEncyclo).toEqual(
        "Wyeth, A. (1948). <i>Christina's world</i> [Painting]. Museum of Modern Art."
      );
    });

    //*Test case 2
    it("should properly cite without Author", () => {
      const dictorEncyclo = citeBrochure({
        authors: [
          
         ],
        date: "2007",
        title: "Conserving water in Ontario",
        docType: "Brochure",
        publisher: "Ministry of the Environment"
      });
      expect(dictorEncyclo).toEqual(
        "Ministry of the Environment. (2007). <i>Conserving water in Ontario</i> [Brochure]. Ministry of the Environment."
      );
    });
  });