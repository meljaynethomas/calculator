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

const numberButtons = document.querySelectorAll(".numberButton");
const symbolButtons = document.querySelectorAll(".symbolButtons");
const inputDisplay = document.querySelectorAll(".inputDisplay")

let firstNumberInput= document.getElementById("firstNumberInput");

// let firstValue = parse int substring
// let secondVale = parse int substring
// let operator = " "

// for loop over string - if i is not operator, keep going, and then change this to a substring


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

// const calculateAnswer = (event) => {
//   let sum = document.getElementById("displayInput").textContent;
//   let sumString = sum.split('');
//   console.log(sumString);









