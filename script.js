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

console.log(buttonNine)

const getNumber = (event) => {
  const numberButtons = document.querySelectorAll(".numberButton");
  numberButtons.forEach((button) => {
    document.getElementById("displayInput").innerHTML = button;
  });
};

buttonOne.addEventListener("click", getNumber)
buttonTwo.addEventListener("click", getNumber)

// document.getElementById("displayInput").innerHTML = buttonOne;
// document.getElementById("displayInput").innerHTML = buttonTwo;




// const displayInput = document.getElementById("displayInput");
// const numberButtons = document.getElementsByClassName("numberButton")

//  //  






