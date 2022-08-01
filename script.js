const screenPrevious = document.querySelector('#screenPrevious');
const screenCurrent = document.querySelector('#screenCurrent');
const numButtons = document.querySelectorAll('.numButton').value;
const operationButtons = document.querySelectorAll('.opButton');
const decimialButton = document.querySelector('#deciButton');
const equalsButton = document.querySelector('#equalsButton');
const negativeButton = document.querySelector('#negativeButton');
const backSpaceButton = document.querySelector('#backSpaceButton');
const clearCurrentScreen = document.querySelector('#clearcurrentScreen');
const clearBothScreens =document.querySelector('#clearBothScreens');

// figure out how to get a loop to stop on the number clicked
const numButtonLoop = (numButtons) => {
    numButtons.map((button) => {
        return numButtons.map;
    }) 
}

console.log(numButtonLoop[2]);