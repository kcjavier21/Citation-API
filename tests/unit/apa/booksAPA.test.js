const { citeBook, citeBookChapter, citeRepublishedBook } = require("../../../utils/apa/citing/booksAPA");

describe("Books (APA)", () => {
  it("should properly cite book, No link", () => {
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

  it("should properly cite book, No Edition and Volume", () => {
    const book = citeBook({
      authors: [{ firstName: "Lani", lastName: "Florian" }],
      year: "2022",
      book: {
        title: "The SAGE handbook of special education",
        edition: null,
        volume: null,
        publisher: "SAGE Publications",
        link: null,
      },
    });
    
    expect(book).toEqual(
      "Florian, L. (2022). The SAGE handbook of special education. SAGE Publications."
    );
  });

  it("should properly cite book, No Volume", () => {
    const book = citeBook({
      authors: [{ firstName: "Lani", lastName: "Florian" }],
      year: "2022",
      book: {
        title: "The SAGE handbook of special education",
        edition: 2,
        volume: null,
        publisher: "SAGE Publications",
        link: null,
      },
    });
    
    expect(book).toEqual(
      "Florian, L. (2022). The SAGE handbook of special education (2nd ed.). SAGE Publications."
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

  // Bergquist, J. M. (1992). German Americans. In J. D. Buenker 
// & L. A. Ratner (Eds.), Multiculturalism in the United States:
// A comparative guide to acculturation and ethnicity (Vol. 3, 
// pp. 53–76). Greenwood

  it("should properly cite a chapter of the book", () => {
    const bookChapter = citeBookChapter({
      authors: [{ firstName: "John", lastName: "Bergquist", middleInitial: "M" }],
      year: "1992",
      chapter: "German Americans",
      editors: [
        { firstName: "John", lastName: "Buenker", middleInitial: "D" },
        { firstName: "Lorman", lastName: "Ratner", middleInitial: "A" },
      ],
      book: {
        title: "Multiculturalism in the United States:A comparative guide to acculturation and ethnicity",
        volume: 3,
        publisher: "Greenwood",
        link: null,
      },
      pages: "53-76",
    });

    expect(bookChapter).toEqual(
      "Bergquist, J. M. (1992). German Americans. In J. D. Buenker & L. A. Ratner (Eds.), Multiculturalism in the United States:"
      + "A comparative guide to acculturation and ethnicity (Vol. 3, pp. 53-76). Greenwood."
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
