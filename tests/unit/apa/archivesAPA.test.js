const { citeArchiveSource } = require("../../../utils/apa/citing/archivesAPA");

describe("Archive Sources  (APA)", () => {

//*Test case 1
  it("should properly cite Archive Source with Author v1", () => {
    const dictorEncyclo = citeArchiveSource({
      authors: [
        {
          lastName: "Hicks",
          firstName: "Henry",
          middleInitial: "D."
        }
       ],
      date: new Date(1956, 9, 24),
      title: "Correspondence from Henry Davies Hicks to the Annapolis County electorate",
      description: "",
      collection: {
                    Name: "Henry Davies Hicks fonds",
                    Details: "MS-2-511, Box 15, Folder 9",
                },
      repository: {
        Name: "Dalhousie University Archives",
        City: "Halifax, Nova Scotia, Canada"
      }
    });
    expect(dictorEncyclo).toEqual(
      "Hicks, H. D. (1956, October 24). <i>Correspondence from Henry Davies Hicks to the Annapolis County electorate.</i>"
      + " Henry Davies Hicks fonds (MS-2-511, Box 15, Folder 9). Dalhousie University Archives, Halifax, Nova Scotia, Canada."
    );
  });

//*Test case 2
  it("should properly cite Archive Source with Author v2", () => {
    const dictorEncyclo = citeArchiveSource({
      authors: [
        {
          lastName: "Frank",
          firstName: "London",
          middleInitial: "K"
        }
       ],
      date: new Date(1935, 1, 4),
      title: "",
      description: "Letter to Robert M. Ogden",
      collection: {
                    Name: "",
                    Details: "GEB series 1.3, Box 371, Folder 3877",
                },
      repository: {
        Name: "Rockefeller Archive Centre",
        City: "Tarrytown, NY, USA"
      }
    });
    expect(dictorEncyclo).toEqual(
      "Frank, L. K. (1935, February 04). [Letter to Robert M. Ogden]. (GEB series 1.3, Box 371, Folder 3877)."
       + " Rockefeller Archive Centre, Tarrytown, NY, USA."
    );
  });

//*Test case 3
  it("should properly cite Archive Source without Author v1", () => {
    const dictorEncyclo = citeArchiveSource({
      authors: [
     
       ],
      date: "1958",
      title: "Johnny can read, better than ever",
      description: "",
      collection: {
                    Name: "Unidentified newspaper clipping",
                    Details: "Series 10, File 01165",
                },
      repository: {
        Name: "Photographic, Sound, Film, and Biographical Records, Department of Special Collections and University Archives, Marquette University",
        City: "Milwaukee, WI, USA"
      }
    });
    expect(dictorEncyclo).toEqual(
      "Johnny can read, better than ever. (1958). Unidentified newspaper clipping (Series 10, File 01165). Photographic,"
      + " Sound, Film, and Biographical Records, Department of Special Collections and University Archives, Marquette"
      + " University, Milwaukee, WI, USA."
    );
  });

//*Test case 4
  it("should properly cite Archive Source without Author v2", () => {
    const dictorEncyclo = citeArchiveSource({
      authors: [
       
       ],
      date: new Date(1948, 8, 18),
      title: "Psychoanalysis institute to open in the new year",
      description: "Clipping from an unidentified Dayton, OH newspaper",
      collection: {
                    Name: "Copy in possession of the author",
                    Details: "",
                },
      repository: {
        Name: "",
        City: ""
      }
    });
    expect(dictorEncyclo).toEqual(
      "Psychoanalysis institute to open in the new year. (1948, September 18). [Clipping from an unidentified Dayton, OH newspaper]. Copy in possession of the author."
     
    );
  });
});