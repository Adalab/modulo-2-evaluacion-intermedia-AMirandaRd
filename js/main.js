"use strict";

const inputNumber = document.querySelector(".js-input");
const cluetext = document.querySelector(".js-clue");
const numberOfAttempts = document.querySelector(".js-counter");
const button = document.querySelector(".js-button");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
}
const randomNumber = getRandomNumber();
console.log(randomNumber);

function checkTheNumber() {
    const selectedNumber = parseInt(inputNumber.value);
    console.log(selectedNumber);

    if (selectedNumber < 1 || selectedNumber > 100) {
        cluetext.innerHTML = "El número debe estar entre 1 y 100";
    } else if (selectedNumber === randomNumber) {
        cluetext.innerHTML = "Has ganado campeona!!!";
    } else if (selectedNumber < randomNumber) {
        cluetext.innerHTML = "Demasiado bajo";
    } else if (selectedNumber > randomNumber) {
        cluetext.innerHTML = "Demasiado alto";
    }
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
