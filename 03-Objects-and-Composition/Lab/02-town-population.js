function townPopulation(data) {
  const registry = {};

  for (let information of data) {
    let [town, population] = information.split(' <-> ');
    population = Number(population);

    if (!registry.hasOwnProperty(town)) {
      registry[town] = population;
      continue;
    }

    registry[town] += population;
  }
  
  const output = Object.entries(registry);
  for (let [city, population] of output) {
    console.log(`${city} : ${population}`);
  }
}

townPopulation([
  'Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000'
]);

townPopulation([
  'Istanbul <-> 100000',
  'Honk Kong <-> 2100004',
  'Jerusalem <-> 2352344',
  'Mexico City <-> 23401925',
  'Istanbul <-> 1000'
]);