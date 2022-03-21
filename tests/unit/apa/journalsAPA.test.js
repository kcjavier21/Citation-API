const { citeJournalArticle } = require("../../../utils/apa/citing/journalsAPA");

describe("cite journals properly", () => {
  it("should properly cite journals with one author", () => {
    const journal = citeJournalArticle({
      authors: [{ firstName: "Allan Gabrielle", lastName: "Paivio", middleInitial: "G" }],
      year: "1975",
      article: "Perceptual comparisons through the mind's eye",
      journal: {
        title: "Memory & Cognition",
        volume: 3,
        issue: null,
        page: "635-647",
        link: null,
      },
    });

    expect(journal).toEqual(
      "Paivio, A. G. (1975). Perceptual comparisons through the mind's eye. <i>Memory & Cognition</i>, 3, 635-647."
    );
  });

  it("should properly cite journals with one author but no date", () => {
    const journal = citeJournalArticle({
      authors: [{ firstName: "Allan Gabrielle", lastName: "Paivio", middleInitial: "G" }],
      date: null,
      article: "Perceptual comparisons through the mind's eye",
      journal: {
        title: "Memory & Cognition",
        volume: 3,
        issue: null,
        page: "635-647",
        link: null,
      },
    });

    expect(journal).toEqual(
      "Paivio, A. G. (n.d.). Perceptual comparisons through the mind's eye. <i>Memory & Cognition</i>, 3, 635-647."
    );
  });

  it("should properly cite journals with no author", () => {
    const journal = citeJournalArticle({
      authors: [],
      year: 1975,
      article: "Perceptual comparisons through the mind's eye",
      journal: {
        title: "Memory & Cognition",
        volume: 3,
        issue: null,
        page: "635-647",
        link: null,
      },
    });

    expect(journal).toEqual(
      "Perceptual comparisons through the mind's eye. (1975). <i>Memory & Cognition</i>, 3, 635-647."
    );
  });

  it("should properly cite journals with two authors", () => {
    const journal = citeJournalArticle({
      authors: [
        { firstName: "Lawrence", lastName: "Becker" },
        { firstName: "Clive", lastName: "Seligman" },
      ],
      year: "2010",
      article: "Welcome to the Energy Crisis",
      journal: {
        title: "journal of Social Issues",
        volume: null,
        issue: null,
        page: "1-7",
        link: "https://doi.org/10.1111/j.1540-4560.1981.tb02623.x",
      },
    });

    expect(journal).toEqual(
      "Becker, L., & Seligman, C. (2010). Welcome to the Energy Crisis. <i>journal of Social Issues</i>, 1-7. https://doi.org/10.1111/j.1540-4560.1981.tb02623.x"
    );
  });

  it("should properly cite journals with three authors", () => {
    const journal = citeJournalArticle({
      authors: [
        { firstName: "Lena", lastName: "Frischlich" },
        { firstName: "Lindsay", lastName: "Hahn" },
        { firstName: "Diana", lastName: "Rieger" },
      ],
      year: "2021",
      article: "The promises and pitfalls of inspirational media: What do we know, and where do we go from here?",
      journal: {
        title: "Media and Communication",
        volume: 9,
        issue: 2,
        page: "162-166",
        link: null,
      },
    });

    expect(journal).toEqual(
      "Frischlich, L., Hahn, L., & Rieger, D. (2021). The promises and pitfalls of inspirational media: What do we know, and where do we go from here?. <i>Media and Communication</i>, 9(2), 162-166."
    );
  });

  it("should properly cite journals with more than 20 authors", () => {
    const journal = citeJournalArticle({
      authors: [
        { firstName: "Lena", lastName: "Frischlich" },
        { firstName: "Lindsay", lastName: "Hahn" },
        { firstName: "Diana", lastName: "Rieger" },
        { firstName: "Lena", lastName: "Frischlich" },
        { firstName: "Lindsay", lastName: "Hahn" },
        { firstName: "Diana", lastName: "Rieger" },
        { firstName: "Lena", lastName: "Frischlich" },
        { firstName: "Lindsay", lastName: "Hahn" },
        { firstName: "Diana", lastName: "Rieger" },
        { firstName: "Lena", lastName: "Frischlich" },
        { firstName: "Lindsay", lastName: "Hahn" },
        { firstName: "Diana", lastName: "Rieger" },
        { firstName: "Lena", lastName: "Frischlich" },
        { firstName: "Lindsay", lastName: "Hahn" },
        { firstName: "Diana", lastName: "Rieger" },
        { firstName: "Lena", lastName: "Frischlich" },
        { firstName: "Lindsay", lastName: "Hahn" },
        { firstName: "Diana", lastName: "Rieger" },
        { firstName: "Lena", lastName: "Frischlich" },
        { firstName: "Lindsay", lastName: "Hahn" },
        { firstName: "Diana", lastName: "Rieger" },
      ],
      year: "2021",
      article: "The promises and pitfalls of inspirational media: What do we know, and where do we go from here?",
      journal: {
        title: "Media and Communication",
        volume: 9,
        issue: 2,
        page: "162-166",
        link: null,
      },
    });

    expect(journal).toEqual(
      "Frischlich, L., Hahn, L., Rieger, D., Frischlich, L., Hahn, L., Rieger, D., Frischlich, L., Hahn, L., Rieger, D., Frischlich, L., Hahn, L., Rieger, D., Frischlich, L., Hahn, L., Rieger, D., Frischlich, L., Hahn, L., Rieger, D., Frischlich, L., ... Rieger, D. (2021). The promises and pitfalls of inspirational media: What do we know, and where do we go from here?. <i>Media and Communication</i>, 9(2), 162-166."
    );
  });
});
