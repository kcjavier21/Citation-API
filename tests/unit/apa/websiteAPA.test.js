const { citeWebsite } = require("../../../utils/apa/citing/websiteAPA");

//Cain, K. (2012). The negative effects of Facebook on
// communication. Social Media Today.
// http://socialmediatoday.com

describe("Website (APA)", () => {
  it("should properly cite a website", () => {
    const website = citeWebsite({
      authors: [{ firstName: "Kevin", lastName: "Cain", middleInitial: "" }],
      year: "2012",
      article: "The negative effects of Facebook on communication",
      website: {
        title: "Social Media Today",
        link: "http://socialmediatoday.com",
      },
    });
    expect(website).toEqual(
      "Cain, K. (2012). <i>The negative effects of Facebook on communication</i>. Social Media Today. http://socialmediatoday.com"
    );
  });
});
