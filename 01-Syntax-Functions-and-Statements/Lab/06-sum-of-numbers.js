function sumOfNumbers(n, m) {
  let numberN = Number(n);
  let numberM = Number(m);
  let sum = 0;

  for (let i = numberN; i <= numberM; i++) {
    sum += i;
  }

  console.log(sum);
}

sumOfNumbers('1', '5')