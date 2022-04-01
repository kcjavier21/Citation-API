const { citeBookWebsite, citeBookReader, citeBookPrinted } = require("../../../utils/mla/citing/booksMLA");

describe("Books (MLA)", () => {
  it("should properly cite a book from a website", () => {
    const bookWebsite = citeBookWebsite({
      authors: [{ firstName: "Jane", lastName: "Austen" }, { firstName: "Seth", lastName: "Grahame-Smith"}],
      source: null,
      container: "Pride and Prejudice and Zombies",
      contributor: { type: null, firstName: null, lastName: null },
      version: null,
      number: null,
      publisher: "Quirk",
      year: "2015",
      pages: null,
      website: "Google Books",
      link: "books.google.com/books?id=x5xPaPeZzmUC&lpg=PP1&dq=zombies&pg=PP1#v=onepage&q=zombies&f=false",
    });
    expect(bookWebsite).toEqual(
      "Austen, Jane, and Seth Grahame-Smith. <i>Pride and Prejudice and Zombies</i>. Quirk, 2015. Google Books, books.google.com/books?id=x5xPaPeZzmUC&lpg=PP1&dq=zombies&pg=PP1#v=onepage&q=zombies&f=false."
    );
  });

  it("should properly cite a book from an e-reader", () => {
    const bookReader = citeBookReader({
      authors: [{ firstName: "Anthony", lastName: "Doer" }],
      source: null,
      container: "All the Light We Cannot See",
      contributor: { type: null, firstName: null, lastName: null },
      reader: "Kindle Edition",
      version: null,
      number: null,
      publisher: "Scribner",
      year: "2014",
      pages: null,
    });
    expect(bookReader).toEqual(
      "Doer, Anthony. <i>All the Light We Cannot See</i>. Kindle Edition, Scribner, 2014."
    );
  });

  it("should properly cite a printed book", () => {
    const bookPrinted = citeBookPrinted({
      authors: [{ firstName: "Gregg", lastName: "Olsen" }, { firstName: "Rebecca", lastName: "Morris"}],
      source: null,
      container: "If I Can’t Have You: Susan Powell, Her Mysterious Disappearance, and the Murder of Her Children",
      contributor: { type: null, firstName: null, lastName: null },
      version: null,
      number: null,
      publisher: "St. Martin’s True Crime",
      year: "2015",
      pages: "18-22",
    });
    expect(bookPrinted).toEqual(
      "Olsen, Gregg, and Rebecca Morris. <i>If I Can’t Have You: Susan Powell, Her Mysterious Disappearance, and the Murder of Her Children</i>. St. Martin’s True Crime, 2015., pp. 18-22."
    );
  });
});
