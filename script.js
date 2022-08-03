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
  if(screenCurrent){
    screenCurrent.innerHTML = screenCurrent.innerHTML.slice(0, -1);
  }
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
  operator = "";
};
clearBothScreens.addEventListener("click", handleClearBothScreens);




//number buttons
const handleNumButtons = (event) => {
  screenCurrent.innerHTML += event.target.innerHTML;
  //number1 = Number(screenCurrent.innerHTML);
  //console.log(number1);
};
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', handleNumButtons);
}



//operation button
const handleOperationButtons = (event) => {
  
  number1 = parseInt(screenCurrent.innerHTML);
  screenCurrent.innerHTML += event.target.innerHTML
  operator = screenCurrent.innerHTML.slice(-1);
  screenCurrent.innerHTML = ""
  
  number2 = parseFloat(screenCurrent.innerHTML);
  
  //operator = event.target.innerHTML;
  //screenCurrent.innerHTML = ""; 
  //number2 = screenCurrent.innerHTML;
   console.log(number1, operator, number2);
};
for (let i = 0; i < operationButtons.length; i++) {
  operationButtons[i].addEventListener('click', handleOperationButtons);
};




//calculation button
const calculate = (number1, number2, operator) => {
  number2 = parseInt(screenCurrent.innerHTML);
  console.log(number2, operator);

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;

    case '-':
      result = number1 - number2;
      break;

    case 'x':
      result = number1 * number2;
      break;

    case '÷':
      result = number1 / number2;
      break;
  }
   screenCurrent.innerHTML = result;
};

equalsButton.addEventListener("click", calculate);



//console.log(calculate(2,2,"+"));

//Handler--button need to input it value
//forLoop--iterate through the numButtons
// const button9 = document.querySelector('#button9');
// const handleButton9 = () => {
//     screenCurrent.innerHTML = button9.innerHTML;
// }
// button9.addEventListener('click', handleButton9);