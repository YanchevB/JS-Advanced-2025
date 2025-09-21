function cityRecord(name, population, treasury) {
  const city = { name, population, treasury };
  return city;
}

let city = cityRecord('Tortuga', 7000, 15000);
console.log(city);