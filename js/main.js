"use strict";

const inputNumber = document.querySelector(".js-input");
const clueText = document.querySelector(".js-clue");
const numberOfAttempts = document.querySelector(".js-counter");
const button = document.querySelector(".js-button");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);
let answer=''
function checkTheNumber() {
    const selectedNumber = parseInt(inputNumber.value);
    console.log(selectedNumber);

    if (selectedNumber < 1 || selectedNumber > 100) {
        answer = "El número debe estar entre 1 y 100";
    } 
    else if (selectedNumber === randomNumber) {
        answer = "Has ganado campeona!!!";
    } else if (selectedNumber < randomNumber) {
        answer = "Demasiado bajo";
    } else if (selectedNumber > randomNumber) {
        answer = "Demasiado alto";
    }
    clueText.innerHTML=answer;
}

let counter = 0;
const attemptsCounter = () => {
    counter++;
    numberOfAttempts.innerHTML = `Número de intentos: ${counter}`;
};


// "container" function
const handlerButton = (event) => {
    event.preventDefault();
    checkTheNumber();
    attemptsCounter();
    
};

button.addEventListener("click", handlerButton);
