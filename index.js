const express = require("express");
const bodyParser = require("body-parser");
const books = require("./routes/apa/books");
const brochures = require("./routes/apa/brochures");
const cases = require("./routes/apa/cases");
const dictionaryOrEncyclopedia = require("./routes/apa/dictionaryOrEncyclopedias");
const internationalAgreement = require("./routes/apa/internationalAgreements");
const journals = require("./routes/apa/journals");
const manuscripts = require("./routes/apa/manuscripts");
const newspapers = require("./routes/apa/newspapers");
const reports = require("./routes/apa/reports");
const archives = require("./routes/apa/archives")
const app = express();

app.use(bodyParser.json());
app.use("/api/apa/books", books);
app.use("/api/apa/reports", reports);
app.use("/api/apa/brochures-pamphlets-and-paintings", brochures);
app.use("/api/apa/cases", cases);
app.use("/api/apa/dictionary-or-encyclopedias", dictionaryOrEncyclopedia);
app.use("/api/apa/international-agreements", internationalAgreement);
app.use("/api/apa/journals", journals);
app.use("/api/apa/manuscripts", manuscripts);
app.use("/api/apa/newspapers", newspapers);
app.use("/api/apa/reports", reports);
app.use("/api/apa/archives", archives);

console.log(new Date(2022));
const port = process.env.port || 8000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
