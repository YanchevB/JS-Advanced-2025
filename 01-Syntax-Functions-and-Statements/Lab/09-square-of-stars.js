function squareOfStars(arg) {
  if (arg === undefined) {
      arg = 5;
  }

  for (let i = 1; i <= arg; i++) {
    console.log('* '.repeat(arg));
  }
}

squareOfStars()