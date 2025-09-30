function filterEmployees(data, criteria) {
  const employeeData = JSON.parse(data);
  const [keyCriteria, keyValue] = criteria.split('-');

  const filtered = employeeData
    .filter(entry => entry[keyCriteria] === keyValue)
    .map(entry => ({
      name: `${entry.first_name} ${entry.last_name}`,
      email: `${entry.email}`
    }))

  filtered.forEach((entry, i) => console.log(`${i}. ${entry.name} - ${entry.email}`));
}

filterEmployees(
`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },
  {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
}]`, 'gender-Female');