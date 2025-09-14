function timeToWalk(steps, lengthOfStepsM, kmPerH) {
  let distanceInM = steps * lengthOfStepsM;
  let speedMinS = kmPerH / 3.6;
  let timeSeconds = distanceInM / speedMinS

  let secondsBreak = Math.floor(distanceInM / 500) * 60;
  let totalSeconds = timeSeconds + secondsBreak;

  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60)
  let seconds = totalSeconds % 60;
  console.log(`${hours.toString().padStart(2, "0")}:` +
    `${minutes.toString().padStart(2, "0")}:` +
    `${seconds.toFixed().toString().padStart(2, "0")}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5)