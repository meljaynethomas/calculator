const getNumber = (event) => {
  let value = event.target.textContent;
  const parsedValue = parseInt(value);
  console.log(parsedValue);
  document.getElementById("calculatorDisplay").innerHTML += parsedValue;
};

const getOperator = (event) => {
  let operator = event.target.textContent;
  document.getElementById("calculatorDisplay").innerHTML += operator;
  console.log(operator);
}

const calculateAnswer = (event) => {
  let sum = document.getElementById("calculatorDisplay").textContent;
  console.log(sum);

    for (let index = 0; index <= sum.length; index++) {
      if (sum.charAt(index) == '+') {
        let firstNumber = sum.substring(0, index);
        let parsedFirstNumber = parseInt(firstNumber);
        let secondNumber = sum.substring(index+1);
        let parsedSecondNumber = parseInt(secondNumber);
        let total = parsedFirstNumber+parsedSecondNumber;
        document.getElementById('calculatorDisplay').textContent = " ";
        document.getElementById('calculatorDisplay').textContent = total;
      } else if (sum.charAt(index) == '-') {
        let firstNumber = sum.substring(0, index);
        let parsedFirstNumber = parseInt(firstNumber);
        let secondNumber = sum.substring(index+1);
        let parsedSecondNumber = parseInt(secondNumber);
        let total = parsedFirstNumber-parsedSecondNumber;
        document.getElementById('calculatorDisplay').textContent = " ";
        document.getElementById('calculatorDisplay').textContent = total;
      } else if (sum.charAt(index) == '*') {
        let firstNumber = sum.substring(0, index);
        let parsedFirstNumber = parseInt(firstNumber);
        let secondNumber = sum.substring(index+1);
        let parsedSecondNumber = parseInt(secondNumber);
        let total = parsedFirstNumber*parsedSecondNumber;
        document.getElementById('calculatorDisplay').textContent = " ";
        document.getElementById('calculatorDisplay').textContent = total;
      } else if (sum.charAt(index) == '/') {
        let firstNumber = sum.substring(0, index);
        let parsedFirstNumber = parseInt(firstNumber);
        let secondNumber = sum.substring(index+1);
        let parsedSecondNumber = parseInt(secondNumber);
        let total = parsedFirstNumber/parsedSecondNumber;
        document.getElementById('calculatorDisplay').textContent = " ";
        document.getElementById('calculatorDisplay').textContent = total;
      }
    }
}







