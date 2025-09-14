function GCD(numA, numB) {
  let gcd = numA % numB

  while (gcd !== 0) {
    numA = numB;
    numB = gcd;
    gcd = numA % numB
  }
  console.log(numB);
}

GCD(2154, 458);