const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// === ROUTES ===
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
const ytVideo = require("./routes/apa/ytVideo");

// === APP ===
const app = express();

// === MIDDLEWARE ===
app.use(bodyParser.json());
app.use(cors());

// === ROUTES ====
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
app.use("/api/apa/yt-video", ytVideo);

// === PORT ===
const port = process.env.port || 8000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
