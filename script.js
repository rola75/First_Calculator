const screenPrevious = document.querySelector('#screenPrevious');
const screenCurrent = document.querySelector('#screenCurrent');
const numButtons = document.querySelectorAll('.numButton');
const operationButtons = document.querySelectorAll('.opButton');
const decimialButton = document.querySelector('#deciButton');
const equalsButton = document.querySelector('#equalsButton');
const negativeButton = document.querySelector('#negativeButton');
const backSpaceButton = document.querySelector('#backSpaceButton');
const clearCurrentScreen = document.querySelector('#clearCurrentScreen');
const clearBothScreens = document.querySelector('#clearBothScreens');

let number1;
let number2;
let operator;
let result;

//backspace
const handleBackSpaceButton = () => {
  // if (screenCurrent) {
  //   number1 = number1.slice(0, -1);
  // } else{
  //   number2 = number2.slice(0, -1);
  // }
  screenCurrent.innerHTML = screenCurrent.innerHTML.slice(0, -1);
};
backSpaceButton.addEventListener("click", handleBackSpaceButton);


//clear current screen
const handleCurrentScreen = () => {
  screenCurrent.innerHTML = "";
};
clearCurrentScreen.addEventListener("click", handleCurrentScreen);



//clear everything
const handleClearBothScreens = () => {
  screenCurrent.innerHTML = "";
  screenPrevious.innerHTML = "";
};
clearBothScreens.addEventListener("click", handleClearBothScreens);




//number buttons
const handleNumButtons = (event) => {

  //number2 += Number(event.target.innerHTML);
  screenCurrent.innerHTML += event.target.innerHTML;
  //number1 = Number(screenCurrent.innerHTML);
};
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', handleNumButtons);
}



//operation button
const handleOperationButtons = (event) => {

 
  screenCurrent.innerHTML += event.target.innerHTML
  number1 = Number(screenCurrent.innerHTML.slice(0, -1));
  operator = screenCurrent.innerHTML.slice(-1);
  screenCurrent.innerHTML = ""
  //number2 = Number(screenCurrent.innerHTML);
  // number2 = number1
  // number1 = "";
  // operator = event.target.innerHTML;
  // screenCurrent.innerHTML = "";
  // screenPrevious.innerHTML = number2 + " " + operator;

  //   //screenPrevious.innerHTML = number2;
  //   //number1 = parseInt(screenCurrent.innerHTML);
  //   //screenCurrent.innerHTML += event.target.innerHTML
  //   //operator = screenCurrent.innerHTML.slice(-1);
  //   //screenCurrent.innerHTML = ""
  //   //number2 = parseFloat(screenCurrent.innerHTML);
  //console.log(operator, number1, number2);

};
for (let i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener('click', handleOperationButtons);
};


//calculation button
const calculate = (event) => {
  screenCurrent.innerHTML += event.target.innerHTML;
  console.log(screenCurrent.innerHTML)
  number2 = Number(screenCurrent.innerHTML.slice(0,-1));
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;

    case '-':
      result = Number(number1) - Number(number2);
      break;

    case 'x':
      result = Number(number1) * Number(number2);
      break;

    case '÷':
      result = Number(number1) / Number(number2);
      break;
  } console.log(operator, number1, number2)
  screenCurrent.innerHTML = result;
};

equalsButton.addEventListener("click", calculate);



//console.log(calculate("2","2","+"));

//Handler--button need to input it value
//forLoop--iterate through the numButtons
// const button9 = document.querySelector('#button9');
// const handleButton9 = () => {
//     screenCurrent.innerHTML = button9.innerHTML;
// }
// button9.addEventListener('click', handleButton9);