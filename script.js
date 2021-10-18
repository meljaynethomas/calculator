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

const getNumber = (event) => {
  let value = event.target.textContent;
  const parsedValue = parseInt(value);
  console.log(parsedValue);
  document.getElementById("displayInput").innerHTML += parsedValue;
};

const getSymbol = (event) => {
  let mathsSymbol = event.target.textContent;
  document.getElementById("displayInput").innerHTML += mathsSymbol;
  console.log(mathsSymbol);
}

const sumNumbers = (event) => {
  let value = event.target.textContent;
  let parsedValue = parseInt(value);
  let sum = parsedValue + " " + '+' + " " + parsedValue;
  console.log(sum);
}









