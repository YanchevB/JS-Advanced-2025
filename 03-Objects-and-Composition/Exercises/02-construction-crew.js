function constructionCrew(worker) {
  if (!worker.dizziness) {
    return worker;
  }

  worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
  worker.dizziness = false;

  return worker;
}

const worker = {
  weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: false
};

const test = constructionCrew(worker);
console.log(test);