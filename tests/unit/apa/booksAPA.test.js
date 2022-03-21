const { citeBook, citeRepublishedBook } = require("../../../utils/apa/citing/booksAPA");

describe("Books (APA)", () => {
  it("should properly cite book", () => {
    const book = citeBook({
      authors: [{ firstName: "Lani", lastName: "Florian" }],
      year: "2022",
      book: {
        title: "The SAGE handbook of special education",
        edition: 2,
        volume: 1,
        publisher: "SAGE Publications",
        link: null,
      },
    });

    expect(book).toEqual(
      "Florian, L. (2022). The SAGE handbook of special education (2nd ed., Vol. 1). SAGE Publications."
    );
  });

  it("should properly cite online book", () => {
    const book = citeBook({
      authors: [{ firstName: "Lani", lastName: "Florian" }],
      year: "2022",
      book: {
        title: "The SAGE handbook of special education",
        edition: 2,
        volume: 1,
        publisher: "SAGE Publications",
        link: "https://uk.sagepub.com/en-gb/eur/the-sage-handbook-of-special-education/book237524",
      },
    });

    expect(book).toEqual(
      "Florian, L. (2022). The SAGE handbook of special education (2nd ed., Vol. 1). SAGE Publications. https://uk.sagepub.com/en-gb/eur/the-sage-handbook-of-special-education/book237524"
    );
  });

  it("should properly cite a republished book", () => {
    const book = citeRepublishedBook({
      authors: [
        {
          firstName: "Sigmund",
          lastName: "Freud",
        },
      ],
      year: "1961",
      title: "The standard edition of the complete psychological works of Sigmund Freud",
      volume: "19",
      page: {
        start: "3",
        end: "66",
      },
      publisher: "Hogarth Press",
      origPubYear: "1923",
    });

    expect(book).toEqual(
      "Freud, S. (1961). <i>The standard edition of the complete psychological works of Sigmund Freud</i> (Vol. 19, pp. 3-66). Hogarth Press. (Original work published 1923)"
    );
  });
});
