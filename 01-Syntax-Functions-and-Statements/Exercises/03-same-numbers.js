function sameNumbers(number) {
  let numberString = String(number);
  let firstNum = numberString[0];
  let isTrue = true;
  let sum = Number(firstNum);
  for (let i = 1; i < numberString.length; i++) {
    sum += Number(numberString[i]);
    if (firstNum !== numberString[i]) {
      isTrue = false;
    }
  }

  console.log(isTrue);
  console.log(sum);
}

sameNumbers(2222222);