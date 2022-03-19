const express = require("express");
const bodyParser = require("body-parser");
const books = require("./routes/apa/books");
const cases = require("./routes/apa/cases");
const internationalAgreement = require("./routes/apa/internationalAgreement");
const journals = require("./routes/apa/journals");
const newspapers = require("./routes/apa/newspapers");
const reports = require("./routes/apa/reports");
const app = express();

app.use(bodyParser.json());
app.use("/api/apa/books", books);
app.use("/api/apa/cases", cases);
app.use("/api/apa/internationalAgreement", internationalAgreement);
app.use("/api/apa/journals", journals);
app.use("/api/apa/newspapers", newspapers);
app.use("/api/apa/reports", reports);

const port = process.env.port || 8000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
