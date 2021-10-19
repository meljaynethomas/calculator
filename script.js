//assign a value to each button
//make that value display in <p> tag as each button is pressed
//keep this value in the <p> tag and add others to it
//make the numbers/symbols within the <p> tag into a sum
//calculate the sum and display the answer

let buttonOne = document.getElementById("buttonOne");
let buttonTwo = document.getElementById("buttonTwo");
let buttonThree = document.getElementById("buttonThree");
let buttonFour = document.getElementById("buttonFour");
let buttonFive = document.getElementById("buttonFive");
let buttonSix = document.getElementById("buttonSix");
let buttonSeven = document.getElementById("buttonSeven");
let buttonEight = document.getElementById("buttonEight");
let buttonNine = document.getElementById("buttonNine");
let clearButton = document.getElementById("clearButton");
let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let divideButton = document.getElementById("divideButton");
let multiplyButton = document.getElementById("multiplyButton");
let equalsButton = document.getElementById("equalsButton");



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
          console.log(parsedFirstNumber, parsedSecondNumber);
        } else if (sum.charAt(index) == '-') {
          let firstNumber = sum.substring(0, index);
          let parsedFirstNumber = parseInt(firstNumber);
          let secondNumber = sum.substring(index+1);
          let parsedSecondNumber = parseInt(secondNumber);
          console.log(parsedFirstNumber, parsedSecondNumber);
        } else if (sum.charAt(index) == '*') {
          let firstNumber = sum.substring(0, index);
          let parsedFirstNumber = parseInt(firstNumber);
          let secondNumber = sum.substring(index+1);
          let parsedSecondNumber = parseInt(secondNumber);
          console.log(parsedFirstNumber, parsedSecondNumber);
          console.log(firstNumber, secondNumber);
        } else if (sum.charAt(index) == '/') {
          let firstNumber = sum.substring(0, index);
          let parsedFirstNumber = parseInt(firstNumber);
          let secondNumber = sum.substring(index+1);
          let parsedSecondNumber = parseInt(secondNumber);
          console.log(parsedFirstNumber, parsedSecondNumber);
        }
      }
}      

  // let operator = " "
  // let total = " "

  // let addOperator = "+";
  // let minusOperator = "-";
  // let multiplyOperator = "*";
  // let divisionOperator = "/";








