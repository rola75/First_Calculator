const screenPrevious = document.querySelector('#screenPrevious');
const screenCurrent = document.querySelector('#screenCurrent');
const numButtons = document.querySelectorAll('.numButton');
const operationButtons = document.querySelectorAll('.opButton');
const decimialButton = document.querySelector('#deciButton');
const equalsButton = document.querySelector('#equalsButton');
const negativeButton = document.querySelector('#negativeButton');
const backSpaceButton = document.querySelector('#backSpaceButton');
const clearCurrentScreen = document.querySelector('#clearCurrentScreen');
const clearBothScreens =document.querySelector('#clearBothScreens');

const updateScreenCurrent = (number) => {
    screenCurrent.innerHTML = number;
};

const updateScreenPrevious = (number) => {
    screenPrevious.innerHTML = number;
  };

let currentNumber;
let previousNumber;
let operator;

const handleBackSpaceButton = () => {
    screenCurrent.innerHTML = "";
  };
  


backSpaceButton.addEventListener("click", handleBackSpaceButton);

const handleCurrentScreen = () => {
    screenCurrent.innerHTML = "";
  };
  
clearCurrentScreen.addEventListener("click", handleCurrentScreen);
  
const handleClearBothScreens = () => {
    screenCurrent.innerHTML = "";
    screenPrevious.innerHTML = "";
    operator = "";
  };
  
clearBothScreens.addEventListener("click", handleClearBothScreens);

decimialButton.addEventListener("click", (event) => {
    if (!currentNumber.includes(event.target.innerHTML)) {
      currentNumber += event.target.innerHTML;
    }
  
    updateScreenCurrent(currentNumber);
  });

// figure out how to get a loop to stop on the number clicked
//Handler--button need to input it value
//forLoop--iterate through the numButtons
// const button9 = document.querySelector('#button9');
// const handleButton9 = () => {
//     screenCurrent.innerHTML = button9.innerHTML;
// }
// button9.addEventListener('click', handleButton9);
const handleNumButtons = (event) => {
screenCurrent.innerHTML += event.target.innerHTML;
};

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', handleNumButtons);
}

////working on getting operations to work
const handleOperationButtons = (event) => {
    screenCurrent.innerHTML += event.target.innerHTML;
    };
    
    
    
    
    for (let i = 0; i < operationButtons.length; i++) {
        operationButtons[i].addEventListener('click', handleOperationButtons);
    }
    