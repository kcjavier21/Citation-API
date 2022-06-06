const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// === ROUTES DECLARATION ===
// == APA (format) ==
const archives = require("./routes/apa/archives");
const books = require("./routes/apa/books");
const brochures = require("./routes/apa/brochures");
const cases = require("./routes/apa/cases");
const datasets = require("./routes/apa/datasets")
const dictionaryOrEncyclopedia = require("./routes/apa/dictionaryOrEncyclopedias");
const episode = require("./routes/apa/episodes");
const internationalAgreement = require("./routes/apa/internationalAgreements");
const issue = require("./routes/apa/issue");
const journals = require("./routes/apa/journals");
const manuscripts = require("./routes/apa/manuscripts");
const movies = require("./routes/apa/movies");
const newspapers = require("./routes/apa/newspapers");
const preprint = require("./routes/apa/preprint")
const reports = require("./routes/apa/reports");
const section = require("./routes/apa/section");
const software = require("./routes/apa/software");
const speech = require("./routes/apa/speech");
const television = require("./routes/apa/television");
const thesis = require("./routes/apa/thesis");
const video = require("./routes/apa/video");
const websites = require("./routes/apa/websites");
const youTube = require("./routes/apa/youTube");

const single = require("./routes/apa/single");

// == MLA (format) ==
const booksMLA = require("./routes/mla/books");
const journMagNews = require("./routes/mla/journMagNews");
const encyclopedia = require("./routes/mla/encyclopedia");
const website = require("./routes/mla/website");

// === APP ===
const app = express();

// === MIDDLEWARE ===
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send('Citation API');
});

// === ROUTES PATH ====
// == APA (format) ==
app.use("/api/apa/archives", archives);
app.use("/api/apa/books", books);
app.use("/api/apa/brochures-pamphlets-and-paintings", brochures);
app.use("/api/apa/cases", cases);
app.use("/api/apa/datasets", datasets);
app.use("/api/apa/dictionary-or-encyclopedias", dictionaryOrEncyclopedia);
app.use("/api/apa/episode", episode);
app.use("/api/apa/international-agreements", internationalAgreement);
app.use("/api/apa/issue", issue);
app.use("/api/apa/journals", journals);
app.use("/api/apa/manuscripts", manuscripts);
app.use("/api/apa/movies", movies);
app.use("/api/apa/newspapers", newspapers);
app.use("/api/apa/preprint-articles", preprint);
app.use("/api/apa/reports", reports);
app.use("/api/apa/section", section);
app.use("/api/apa/software", software);
app.use("/api/apa/speech", speech);
app.use("/api/apa/television", television);
app.use("/api/apa/thesis", thesis);
app.use("/api/apa/video", video);
app.use("/api/apa/websites", websites);
app.use("/api/apa/you-tube", youTube);

app.use("/api/apa/single", single);

// == MLA (format) ==
app.use("/api/mla/books", booksMLA);
app.use("/api/mla/journal-magazine-newspaper", journMagNews);
app.use("/api/mla/encyclopedia", encyclopedia);
app.use("/api/mla/website", website);




// === PORT ===
const port = process.env.port || 8000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
