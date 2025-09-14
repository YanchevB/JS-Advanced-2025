function roadRadar(speed, area) {
  let speedingLimit = {
    'motorway': 130,
    'interstate': 90,
    'city': 50,
    'residential': 20
  }

  let difference = speed - speedingLimit[area];

  if (speed > speedingLimit[area]) {
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedingLimit[area]} - ${calculateStatus(difference)}`);
  } else {
    console.log(`Driving ${speed} km/h in a ${speedingLimit[area]} zone`);
  }

  function calculateStatus(difference) {
    if (difference <= 20) {
      return 'speeding';
    } else if (difference > 20 && difference <= 40) {
      return 'excessive speeding';
    } else {
      return 'reckless driving'
    }
  }
}

roadRadar(51, 'city');