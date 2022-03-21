const citeCase = ({firstPerson, secondPerson, caseId, year}) => {
  const formattedYear = year ? year : "n.d.";
  referenceCitation = `${firstPerson.lastName} v. ${secondPerson.lastName}, ${caseId}, ${formattedYear}`;

  return referenceCitation;
};

module.exports = { citeCase };
