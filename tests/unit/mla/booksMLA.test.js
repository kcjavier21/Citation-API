const { citeBookWebsite, citeBookReader, citeBookPrinted } = require("../../../utils/mla/citing/booksMLA");

describe("Books (MLA)", () => {
  it("should properly cite a book from a website", () => {
    const bookWebsite = citeBookWebsite({
      authors: [{ firstName: "Jane", lastName: "Austen", middleInitial: "B" }, { firstName: "Seth", lastName: "Grahame-Smith", middleInitial: ""}],
      container: "Pride and Prejudice and Zombies",
      version: null,
      volume: null,
      publisher: "Quirk",
      year: "2015",
      pages: null,
      website: "Google Books",
      link: "books.google.com/books?id=x5xPaPeZzmUC&lpg=PP1&dq=zombies&pg=PP1#v=onepage&q=zombies&f=false",
    });
    expect(bookWebsite).toEqual(
      "Austen, Jane B., and Seth Grahame-Smith. <i>Pride and Prejudice and Zombies</i>. Quirk, 2015. Google Books, books.google.com/books?id=x5xPaPeZzmUC&lpg=PP1&dq=zombies&pg=PP1#v=onepage&q=zombies&f=false."
    );
  });

  it("should properly cite a book from an e-reader", () => {
    const bookReader = citeBookReader({
      authors: [{ firstName: "Anthony", lastName: "Doer", middleInitial: "" }],
      container: "All the Light We Cannot See",
      reader: "Kindle Edition",
      version: null,
      volume: null,
      publisher: "Scribner",
      year: "2014",
      pages: "",
    });
    expect(bookReader).toEqual(
      "Doer, Anthony. <i>All the Light We Cannot See</i>. Kindle Edition, Scribner, 2014."
    );
  });

  it("should properly cite a printed book", () => {
    const bookPrinted = citeBookPrinted({
      authors: [{ firstName: "Gregg", lastName: "Olsen", middleInitial: "" }, { firstName: "Rebecca", lastName: "Morris", middleInitial: ""}],
      container: "If I Can’t Have You: Susan Powell, Her Mysterious Disappearance, and the Murder of Her Children",
      version: null,
      volume: null,
      publisher: "St. Martin’s True Crime",
      year: "2015",
      pages: "18-22",
    });
    expect(bookPrinted).toEqual(
      "Olsen, Gregg, and Rebecca Morris. <i>If I Can’t Have You: Susan Powell, Her Mysterious Disappearance, and the Murder of Her Children</i>. St. Martin’s True Crime, 2015., pp. 18-22."
    );
  });
});
