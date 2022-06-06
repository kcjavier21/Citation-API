const citeVideoGame = ({ studio, year, title, place, company }) => {
    const formattedYear = year ? year : `n.d.`
    const referenceCitation = `${studio} <i>${title}</i> [Video game]. ${formattedYear}  ${place}, ${company}`;

    return referenceCitation;
};


// data = {
//  studio: "Bethesda Game Studios",
//  year: "2011",
//  title: "Skyrim",
//  place: "Bethesda",
//  company: "Bethesda Softworks",
// };

//console.log(citeVideo(data));
module.exports = { citeVideoGame }; 