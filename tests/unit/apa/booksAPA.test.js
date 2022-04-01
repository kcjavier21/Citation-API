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
      "Florian, L. (2022). <i>The SAGE handbook of special education</i> (2nd ed., Vol. 1). SAGE Publications."
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
      "Florian, L. (2022). <i>The SAGE handbook of special education</i>. SAGE Publications."
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
      "Florian, L. (2022). <i>The SAGE handbook of special education</i> (2nd ed.). SAGE Publications."
    );
  });

  it("should properly cite online book, No Year", () => {
    const book = citeBook({
      authors: [{ firstName: "Lani", lastName: "Florian" }],
      year: null,
      book: {
        title: "The SAGE handbook of special education",
        edition: 2,
        volume: 1,
        publisher: "SAGE Publications",
        link: "https://uk.sagepub.com/en-gb/eur/the-sage-handbook-of-special-education/book237524",
      },
    });

    expect(book).toEqual(
      "Florian, L. (n.d.). <i>The SAGE handbook of special education</i> (2nd ed., Vol. 1). SAGE Publications. https://uk.sagepub.com/en-gb/eur/the-sage-handbook-of-special-education/book237524"
    );
  });

  it("should properly cite online book, No Year", () => {
    const book = citeBook({
      authors: [{ firstName: "Lani", lastName: "Florian", middleInitial: null, }, { firstName: "John", lastName: "Watson", middleInitial: "H" }, 
      { firstName: "Sherlock", lastName: "Holmes", middleInitial:"J", }, { firstName: "Peter", lastName: "Parker", middleInitial: null}, ],
      year: null,
      book: {
        title: "The SAGE handbook of special education",
        edition: 2,
        volume: 1,
        publisher: "SAGE Publications",
        link: "https://uk.sagepub.com/en-gb/eur/the-sage-handbook-of-special-education/book237524",
      },
    });

    expect(book).toEqual(
      "Florian, L., Watson, J. H., Holmes, S. J., & Parker, P. (n.d.). <i>The SAGE handbook of special education</i> (2nd ed., Vol. 1). SAGE Publications. https://uk.sagepub.com/en-gb/eur/the-sage-handbook-of-special-education/book237524"
    );
  });

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
      pages: {
        start: 53,
        end: 76,
      },
    });

    expect(bookChapter).toEqual(
      "Bergquist, J. M. (1992). German Americans. In J. D. Buenker & L. A. Ratner (Eds.), <i>Multiculturalism in the United States:"
      + "A comparative guide to acculturation and ethnicity</i> (Vol. 3, pp. 53-76). Greenwood."
    );
  });

  it("should properly cite a chapter of the book, No Volume and Year", () => {
    const bookChapter = citeBookChapter({
      authors: [{ firstName: "John", lastName: "Bergquist", middleInitial: "M" }],
      year: null,
      chapter: "German Americans",
      editors: [
        { firstName: "John", lastName: "Buenker", middleInitial: "D" },
        { firstName: "Lorman", lastName: "Ratner", middleInitial: "A" },
      ],
      book: {
        title: "Multiculturalism in the United States:A comparative guide to acculturation and ethnicity",
        volume: null,
        publisher: "Greenwood",
        link: null,
      },
      pages: {
        start: 53,
        end: 76,
      },
    });

    expect(bookChapter).toEqual(
      "Bergquist, J. M. (n.d.). German Americans. In J. D. Buenker & L. A. Ratner (Eds.), <i>Multiculturalism in the United States:"
      + "A comparative guide to acculturation and ethnicity</i> (pp. 53-76). Greenwood."
    );
  });

  it("should properly cite a chapter of the book with Link", () => {
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
        link: "https://www.tandfonline.com/doi/abs/10.1080/03612759.1993.9948648",
      },
      pages: {
        start: 53,
        end: 76,
      },
    });

    expect(bookChapter).toEqual(
      "Bergquist, J. M. (1992). German Americans. In J. D. Buenker & L. A. Ratner (Eds.), <i>Multiculturalism in the United States:"
      + "A comparative guide to acculturation and ethnicity</i> (Vol. 3, pp. 53-76). Greenwood. Retrieved from https://www.tandfonline.com/doi/abs/10.1080/03612759.1993.9948648"
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
      pages: {
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

  it("should properly cite a republished book, No Volume, Year, and Publication Year, Two Authors", () => {
    const book = citeRepublishedBook({
      authors: [
        {
          firstName: "Sigmund",
          lastName: "Freud",
          middleInitial: null,
        },
        {
          firstName: "John",
          lastName: "Watson",
          middleInitial: "H",
        }
      ],
      year: null,
      title: "The standard edition of the complete psychological works of Sigmund Freud",
      volume: null,
      pages: {
        start: "3",
        end: "66",
      },
      publisher: "Hogarth Press",
      origPubYear: null,
    });

    expect(book).toEqual(
      "Freud, S., & Watson, J. H. (n.d.). <i>The standard edition of the complete psychological works of Sigmund Freud</i> (pp. 3-66). Hogarth Press. (Original work published n.d.)"
    );
  });
});
