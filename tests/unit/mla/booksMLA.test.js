const { citeBookWebsite } = require("../../../utils/mla/citing/booksMLA");

// Austen, Jane, and Seth Grahame-Smith. Pride and Prejudice and Zombies. Quirk, 2015. Google 
// Books, books.google.com/books?id=x5xPaPeZzmUC&lpg=PP1&dq=zombies&pg=PP1#
// v=onepage&q=zombies&f=false.

// authors, source, container, contributor, version, number, publisher, year, location, optionalElements

describe("Books (MLA)", () => {
  it("should properly cite a book", () => {
    const bookWebsite = citeBookWebsite({
      authors: [{ firstName: "Jane", lastName: "Austen" }, { firstName: "Seth", lastName: "Grahame-Smith"}],
      source: null,
      container: "Pride and Prejudice and Zombies",
      contributor: { type: null, firstName: null, lastName: null },
      version: null,
      number: null,
      publisher: "Quirk",
      year: "2015",
      location: "Google Books, books.google.com/books?id=x5xPaPeZzmUC&lpg=PP1&dq=zombies&pg=PP1#v=onepage&q=zombies&f=false",
      optionalElements: null,
    });
    expect(bookWebsite).toEqual(
      "Austen, Jane, and Seth Grahame-Smith. <i>Pride and Prejudice and Zombies</i>. Quirk, 2015. Google Books, books.google.com/books?id=x5xPaPeZzmUC&lpg=PP1&dq=zombies&pg=PP1#v=onepage&q=zombies&f=false."
    );
  });
});
