const { citePublishedThesis, citeUnpublishedThesis } = require("../../../utils/apa/citing/thesisAPA");

describe("Thesis (APA)", () => {
  it("should properly cite a published thesis", () => {
    const publishedThesis = citePublishedThesis({
      authors: [{ firstName: "Cameron", lastName: "Kelly", middleInitial: "D" }],
      year: "2018",
      title: "The art of coffee roasting",
      kind: "Doctoral thesis",
      institution: "The University of Waikato",
      repository: "The University of Waikato Research Commons",
      link: "https://hdl.handle.net/10289/11614",
    });
    expect(publishedThesis).toEqual("Kelly, C. D. (2018). <i>The art of coffee roasting</i> [Doctoral thesis, The University of Waikato]. The University of Waikato Research Commons. https://hdl.handle.net/10289/11614.");
});
    
  it("should properly cite an unpublished thesis", () => {
    const unpublishedThesis = citeUnpublishedThesis({
      authors: [{ firstName: "Amantha", lastName: "Imber", middleInitial: "" }],
      year: "2003",
      title: "Applicant reactions to graduate recruitment and selection",
      kind: "Unpublished doctoral dissertation",
      institution: "Monash University",
    });
    expect(unpublishedThesis).toEqual("Imber, A. (2003). <i>Applicant reactions to graduate recruitment and selection</i> [Unpublished doctoral dissertation]. Monash University.");
  });
});