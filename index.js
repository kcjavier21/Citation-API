const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// === ROUTES DECLARATION ===
// == APA (format) ==
const archives = require("./routes/apa/archives");
const books = require("./routes/apa/books");
const brochures = require("./routes/apa/brochures");
const cases = require("./routes/apa/cases");
const dataset = require("./routes/apa/dataset")
const dictionaryOrEncyclopedia = require("./routes/apa/dictionaryOrEncyclopedias");
const internationalAgreement = require("./routes/apa/internationalAgreements");
const journals = require("./routes/apa/journals");
const manuscripts = require("./routes/apa/manuscripts");
const newspapers = require("./routes/apa/newspapers");
const preprint = require("./routes/apa/preprint")
const reports = require("./routes/apa/reports");
const websites = require("./routes/apa/websites");

const youTube = require("./routes/apa/youTube");
const movies = require("./routes/apa/movies");

const youtube = require("./routes/apa/youtube");
const television = require("./routes/apa/television");
const episode = require("./routes/apa/episode");
const journal = require("./routes/apa/journal");
const speech = require("./routes/apa/speech");
const SpecialIssueAPA = require("./routes/apa/issue");
const section = require("./routes/apa/section");

// == MLA (format) ==
const booksMLA = require("./routes/mla/books")
const journMagNews = require("./routes/mla/journMagNews");

// === APP ===
const app = express();

// === MIDDLEWARE ===
app.use(bodyParser.json());
app.use(cors());

// === ROUTES PATH ====
// == APA (format) ==
app.use("/api/apa/archives", archives);
app.use("/api/apa/books", books);
app.use("/api/apa/brochures-pamphlets-and-paintings", brochures);
app.use("/api/apa/cases", cases);
app.use("/api/apa/datasets", dataset);
app.use("/api/apa/dictionary-or-encyclopedias", dictionaryOrEncyclopedia);
app.use("/api/apa/international-agreements", internationalAgreement);
app.use("/api/apa/journals", journals);
app.use("/api/apa/manuscripts", manuscripts);
app.use("/api/apa/newspapers", newspapers);
app.use("/api/apa/preprint-articles", preprint);
app.use("/api/apa/reports", reports);
app.use("/api/apa/websites", websites);

app.use("/api/apa/youtube", youTube);
app.use("/api/apa/movies", movies);

app.use("/api/apa/you-tube", youtube);
app.use("/api/apa/television", television);
app.use("/api/apa/episode", episode);
app.use("/api/apa/journal", journal);
app.use("/api/apa/speech", speech);
app.use("/api/apa/issue", SpecialIssueAPA);
app.use("/api/apa/section", section);

// == MLA (format) ==
app.use("/api/mla/books", booksMLA);
app.use("/api/mla/journal-magazine-newspaper", journMagNews);

// === PORT ===
const port = process.env.port || 8000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
