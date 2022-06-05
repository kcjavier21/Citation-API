const { citeWebWithAuthor, citeWebWithout } = require("../../../utils/mla/citing/websiteMLA");
describe("Website (MLA)", () => {
  it("should properly cite a website with author", () => {
    const webwithauthor = citeWebWithAuthor({
      authors:  [{ firstName: "Lori", lastName: "White" }],
      title: "The Newest Fad in People Helping People: Little Free Pantries", 
      website: "Upworthy", 
      publication: "Cloud Tiger Media",
      database: "Cloud Tiger Media", 
      date: new Date(2016, 7, 3),
      location: "www.upworthy.com/the-newest-fad-in-people-helping-people-little-freepantries?g=2&c=hpstream"
    });
    expect(webwithauthor).toEqual(
      `White, Lori. "The Newest Fad in People Helping People: Little Free Pantries." <i>Upworthy</i>, Cloud Tiger Media, 3 Aug. 2016, www.upworthy.com/the-newest-fad-in-people-helping-people-little-freepantries?g=2&c=hpstream.`
    );
  }); 

  //"Giant Panda.” Smithsonian National Zoological Park, Smithsonian Institute
  //nationalzoo.si.edu/animals/giantpandas/pandafacts/
  it("should properly cite a website without author", () => {
    const webwithout = citeWebWithout({
      authors: null,
      title: "Giant Panda", 
      website: "Smithsonian National Zoological Park", 
      publication: "Smithsonian Institute",
      date: null,
      location: "nationalzoo.si.edu/animals/giantpandas/pandafacts"
    });
    expect(webwithout).toEqual(
      `"Giant Panda." <i>Smithsonian National Zoological Park</i>, Smithsonian Institute, nationalzoo.si.edu/animals/giantpandas/pandafacts.`
    );
  }); 
});
