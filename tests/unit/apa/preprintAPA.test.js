const { citePreprint } = require("../../../utils/apa/citing/preprintAPA")

describe("Preprint Sources (APA)", () => {

  //*Test case 1
    it("should properly cite preprint with Author v1", () => {
      const preprint = citePreprint({
        authors: [
          {
            lastName: "Hampton",
            firstName: "Sanders",
            middleInitial: ""
          },
          {
            lastName: "Rabagliati",
            firstName: "Hogerd",
            middleInitial: ""
          },
          {
            lastName: "Sorace",
            firstName: "Andersan",
            middleInitial: ""
          },
          {
            lastName: "Fletcher-Watson",
            firstName: "Strainge",
            middleInitial: ""
          }
         ],
        date: "2017",
        title: "Autism and bilingualism: A qualitative interview study of parents' perspectives and experiences",
        repository: "PsyArXiv",
        url: "https://doi.org/10.31234/osf.io/76xfs"
      }); 
      expect(preprint).toEqual(
        "Hampton, S., Rabagliati, H., Sorace, A., & Fletcher-Watson, S. (2017). <i>Autism and bilingualism: A qualitative interview"
        + " study of parents' perspectives and experiences</i>. PsyArXiv. https://doi.org/10.31234/osf.io/76xfs"
      );
    });
  });