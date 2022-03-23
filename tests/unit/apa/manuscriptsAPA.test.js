const {
  citeUnPublishedManuscript,
  citeManuscriptInPrep,
  citeManuscriptSubmittedForPub,
  citeAcceptedManuscriptAsArticle,
  citeAcceptedManuscriptAsWorkingPaper,
} = require("../../../utils/apa/citing/manuscriptsAPA");

describe("Manuscripts (APA)", () => {
  it("should properly cite an unpublished manuscript with three authors", () => {
    const manuscript = citeUnPublishedManuscript({
      authors: [
        { firstName: "Rick", lastName: "Enikolopov", middleInitial: "D" },
        { firstName: "Alexander", lastName: "Makarin" },
        { firstName: "Max", lastName: "Petrova" },
      ],
      year: "2018",
      title: "Social media and protest participation: Evidence from Russia",
    });

    expect(manuscript).toEqual(
      "Enikolopov, R. D., Makarin, A., & Petrova, M. (2018). <i>Social media and protest participation: Evidence from Russia.</i> Unpublished manuscript."
    );
  });

  it("should properly cite an unpublished manuscript with six authors", () => {
    const manuscript = citeUnPublishedManuscript({
      authors: [
        { firstName: "Rick", lastName: "Enikolopov", middleInitial: "D" },
        { firstName: "Alexander", lastName: "Makarin" },
        { firstName: "Max", lastName: "Petrova" },
        { firstName: "Ken Carlo", lastName: "Javier", middleInitial: "D" },
        { firstName: "Allyza Maureen", lastName: "Catura", middleInitial: "P" },
        { firstName: "Clarck", lastName: "Tumazar", middleInitial: "L" },
      ],
      year: "2018",
      title: "Social media and protest participation: Evidence from Russia",
    });

    expect(manuscript).toEqual(
      "Enikolopov, R. D., Makarin, A., Petrova, M., Javier, K. D., Catura, A. P., & Tumazar, C. L. (2018). " +
        "<i>Social media and protest participation: Evidence from Russia.</i> Unpublished manuscript."
    );
  });

  it("should properly cite a manuscript in preparation", () => {
    const manuscript = citeManuscriptInPrep({
      authors: [{ firstName: "Alexander", lastName: "Brändström", middleInitial: "" }],
      year: "2015",
      title: "Crisis accountability: Ministerial resignations in Sweden",
    });

    expect(manuscript).toEqual(
      "Brändström, A. (2015). <i>Crisis accountability: Ministerial resignations in Sweden.</i> Manuscript in preparation."
    );
  });

  it("should properly cite a submitted manuscript for publication (not accepted yet)", () => {
    const manuscript = citeManuscriptSubmittedForPub({
      authors: [{ firstName: "Alexander", lastName: "Boin", middleInitial: "" }],
      year: "2016",
      title: "The new world of crises and crisis management: Implications for policymaking and research",
    });

    expect(manuscript).toEqual(
      "Boin, A. (2016). <i>The new world of crises and crisis management: Implications for policymaking and research.</i> Manuscript submitted for publication."
    );
  });

  it("should properly cite an accepted manuscript (article)", () => {
    const manuscript = citeAcceptedManuscriptAsArticle({
      authors: [
        { firstName: "Alexander", lastName: "Hindmoor", middleInitial: "" },
        { firstName: "Alexander", lastName: "McConnell", middleInitial: "" },
      ],
      title: "Why didn’t they see it coming? Warning signs, acceptable risks and the global financial crisis",
      journal: "Political Studies",
    });

    expect(manuscript).toEqual(
      "Hindmoor, A., & McConnell, A. (in press). Why didn’t they see it coming? Warning signs, acceptable risks and the global financial crisis. " +
        "<i>Political Studies.</i>"
    );
  });

  it("should properly cite an accepted manuscript (working paper or report)", () => {
    const manuscript = citeAcceptedManuscriptAsWorkingPaper({
      authors: [
        { firstName: "Max", lastName: "Fallov", middleInitial: "A" },
        { firstName: "Alexander", lastName: "Jørgensen", middleInitial: "" },
        { firstName: "Rick", lastName: "Nielsen", middleInitial: "S" },
        { firstName: "Mark", lastName: "de Neergaard", middleInitial: "" },
      ],
      title: "Report on policy analysis",
      reportNumber: "COHSMO Working Paper No. D4.6 Denmark",
      publisher: "Aalborg University",
    });

    expect(manuscript).toEqual(
      "Fallov, M. A., Jørgensen, A., Nielsen, R. S., & de Neergaard, M. (in press). <i>Report on policy analysis</i> " +
        "(COHSMO Working Paper No. D4.6 Denmark). Aalborg University."
    );
  });
});
