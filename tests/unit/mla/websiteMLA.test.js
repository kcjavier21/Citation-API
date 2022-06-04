const { citeElectronicEncyclopedia } = require("../../../utils/mla/citing/websiteMLA");

describe("Website (MLA)", () => {
  //White, Lori. “The Newest Fad in People Helping People: Little Free Pantries.” Upworthy, Cloud
  //Tiger Media, 3 Aug. 2016, www.upworthy.com/the-newest-fad-in-people-helping-people-little-freepantries?g=2&c=hpstream
  it("should properly cite an electronic encyclopedia", () => {
    const webwithauthor = citeWebWithAuthor({
      authors: White, Lori,
      title: "The Newest Fad in People Helping People: Little Free Pantries.", 
      publication: "Upworthy", 
      contributor: { type: null, firstName: null, lastName: null }, 
      version: null, 
      database: "Cloud Tiger Media", 
      year: "2016",
      location: "www.upworthy.com/the-newest-fad-in-people-helping-people-little-freepantries?g=2&c=hpstream"
    });
    expect(webwithauthor).toEqual(
      `White, Lori. “The Newest Fad in People Helping People: Little Free Pantries.” Upworthy, 
      Cloud Tiger Media, 3 Aug. 2016, www.upworthy.com/the-newest-fad-in-people-helping-people-little-freepantries?g=2&c=hpstream`
    );
  }); 

  //"Giant Panda.” Smithsonian National Zoological Park, Smithsonian Institute
  //nationalzoo.si.edu/animals/giantpandas/pandafacts/
  it("should properly cite an electronic encyclopedia", () => {
    const webwithout = citeWebWithout({
      authors: null,
      title: "Giant Panda.", 
      publication: "Smithsonian National Zoological Park", 
      contributor: { type: null, firstName: null, lastName: null }, 
      version: null, 
      database: null, 
      year: null,
      location: "nationalzoo.si.edu/animals/giantpandas/pandafacts/"
    });
    expect(webwithout).toEqual(
      `<i>"Giant Panda.”</i> Smithsonian National Zoological Park, Smithsonian Institute nationalzoo.si.edu/animals/giantpandas/pandafacts/`
    );
  }); 
});
