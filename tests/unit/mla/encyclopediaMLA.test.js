const { citeElectronicEncyclopedia, citePrintedEncyclopedia } = require("../../../utils/mla/citing/encyclopediaMLA");

describe("Enyclopedia (MLA)", () => {
  it("should properly cite an electronic encyclopedia", () => {
    const electronicEncyclopedia = citeElectronicEncyclopedia({
      authors: null,
      title: "Wolfgang Amadeus Mozart", 
      publication: "Encyclopedia Britannica Online", 
      contributor: { type: null, firstName: null, lastName: null }, 
      version: null, 
      database: "Encyclopedia Britannica Inc.", 
      year: "2016",
      location: "www.britannica.com/biography/Wolfgang-Amadeus-Mozart"
    });
    expect(electronicEncyclopedia).toEqual(
      `"Wolfgang Amadeus Mozart". <i>Encyclopedia Britannica Online</i>. Encyclopedia Britannica Inc., 2016. www.britannica.com/biography/Wolfgang-Amadeus-Mozart.`
    );
  });

//   "Iverson, Peter. “Navajo.” Encyclopedia Americana. Scholastic Library, 2004.
  it("should properly cite an electronic encyclopedia without link", () => {
    const printedEncyclopedia = citePrintedEncyclopedia({
      authors:  [{ firstName: "Peter", lastName: "Iverson" }],
      title: "Navajo", 
      publication: "Scholastic Library", 
      contributor: { type: null, firstName: null, lastName: null }, 
      version: null, 
      database: "Encyclopedia Americana", 
      year: "2004",
      location: null,
    });
    expect(printedEncyclopedia).toEqual(
      `Iverson, Peter. "Navajo". <i>Scholastic Library</i>. Encyclopedia Americana, 2004.`
    );
  });
});
