function carFactory(requirements) {
  const car = {
    model: requirements.model,
  };

  const typeOfEngine = {
    smallEngine: { power: 90, volume: 1800 },
    normalEngine: { power: 120, volume: 2400 },
    monsterEngine: { power: 200, volume: 3500 }
  };

  const typeOfCarriage = {
    hatchback: { type: 'hatchback', color: requirements.color},
    coupe: { type: 'coupe', color: requirements.color}
  };

  if (requirements.power <= 90) {
    car.engine = typeOfEngine.smallEngine;
  } else if (requirements.power <= 120) {
    car.engine = typeOfEngine.normalEngine;
  } else {
    car.engine = typeOfEngine.monsterEngine;
  }

  car.carriage = typeOfCarriage[requirements['carriage']];

  if (requirements.wheelsize % 2 === 0) {
    requirements.wheelsize -= 1;
  }
  const wheels = requirements.wheelsize;

  const wheelsArr = new Array(4).fill(wheels);
  car.wheels = wheelsArr;

  return car;
}

const requirements = { 
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'coupe',
  wheelsize: 12 
};

const finished = carFactory(requirements);
console.log(finished);
