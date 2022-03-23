const { citePublishedThesis, citeUnpublishedThesis } = require("../../../utils/apa/citing/thesisAPA");

// Kelly, C. B. D. (2018). The art of coffee roasting [Doctoral
//     thesis, The University of Waikato]. The University of
//     Waikato Research Commons.
//     https://hdl.handle.net/10289/11614.

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
        expect(publishedThesis).toEqual("Kelly, C. D. (2018). The art of coffee roasting [Doctoral thesis, The University of Waikato]. The University of Waikato Research Commons. https://hdl.handle.net/10289/11614.");
    });

    // Imber, A. (2003). Applicant reactions to graduate 
    // recruitment and selection [Unpublished doctoral 
    // dissertation]. Monash University.
    
    it("should properly cite an unpublished thesis", () => {
        const unpublishedThesis = citeUnpublishedThesis({
          authors: [{ firstName: "Amantha", lastName: "Imber", middleInitial: "" }],
          year: "2003",
          title: "Applicant reactions to graduate recruitment and selection",
          kind: "Unpublished doctoral dissertation",
          institution: "Monash University",
        });
        expect(unpublishedThesis).toEqual("Imber, A. (2003). Applicant reactions to graduate recruitment and selection [Unpublished doctoral dissertation]. Monash University.");
    });
});