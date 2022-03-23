const { citeDataset } = require("../../../utils/apa/citing/datasetAPA")

describe("dataset sources (APA)", () => {

  //*Test case 1
    it("should properly cite dataset with multiple authors (6)", () => {
      const dataset = citeDataset({
        authors: [
          {
            lastName: "Coppedge",
            firstName: "Matter",
            middleInitial: ""
          },
          {
            lastName: "Gerring",
            firstName: "Jackson",
            middleInitial: ""
          },
          {
            lastName: "Knutsen",
            firstName: "Clarck",
            middleInitial: "H"
          },
          {
            lastName: "Lindberg",
            firstName: "Serdoin",
            middleInitial: "I"
          },
          {
            lastName: "Teorell",
            firstName: "Jordan",
            middleInitial: ""
          },
          {
            lastName: "Altman",
            firstName: "Deodre",
            middleInitial: ""
          }
         ],
        date: "2019",
        title: "V-Dem country-year dataset v9",
        website: "V-Dem",
        urlOrDoi: "https://doi.org/10.23696/vdemcy19"
      }); 
      expect(dataset).toEqual(
        "Coppedge, M., Gerring, J., Knutsen, C. H., Lindberg, S. I., Teorell, J., & Altman, D. (2019). <i>V-Dem country-year dataset v9</i>" 
        + " [Data set]. V-Dem. https://doi.org/10.23696/vdemcy19"
      );
    });

    //*Test case 2
    it("should properly cite dataset with one author with no middle initial", () => {
      const dataset = citeDataset({
        authors: [
          {
            lastName: "O'Donohue",
            firstName: "Walter",
            middleInitial: ""
          }
         ],
        date: "2017",
        title: "Content analysis of undergraduate psychology textbooks (ICPSR 21600; Version V1)",
        website: "ICPSR",
        urlOrDoi: "https://doi.org/10.3886/ICPSR36966.v1"
      }); 
      expect(dataset).toEqual(
        "O'Donohue, W. (2017). <i>Content analysis of undergraduate psychology textbooks (ICPSR 21600; Version V1)</i> [Data set]."
        + " ICPSR. https://doi.org/10.3886/ICPSR36966.v1"
        
      );
    });

  });