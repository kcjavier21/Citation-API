const citeCase = ({firstPerson, secondPerson, caseId, year}) => {
  const formattedYear = year ? year : "n.d.";
  caseCitation = `${firstPerson.lastName} v. ${secondPerson.lastName}, ${caseId}, ${formattedYear}`;

  return caseCitation;
};

module.exports = { citeCase };
