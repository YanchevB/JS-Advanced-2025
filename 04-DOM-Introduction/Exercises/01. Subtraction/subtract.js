function subtract() {
    const firstNumRef = document.getElementById('firstNumber');
    const secondNumRef = document.getElementById('secondNumber');
    const result = document.getElementById('result');

    const firstNumber = Number(firstNumRef.value);
    const secondNumber = Number(secondNumRef.value);
    
    result.textContent = firstNumber - secondNumber;
}