const character = document.getElementById("character");
const characterStyle = character.style;
const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");
const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");


upArrow.addEventListener("click", moveUp);
downArrow.addEventListener("click", moveDown);
leftArrow.addEventListener("click", moveLeft);
rightArrow.addEventListener("click", moveRight);

function extractNumbers(string) {
    let numArr = [];
    let splitString = string.split("");
    for (let elem of splitString) {
        if (elem.match("[0-9]")) {
            numArr.push(elem);
        }
    }
    return parseInt(numArr.join(""));
}

function moveUp() {
    characterStyle.top = `${extractNumbers(window.getComputedStyle(character).getPropertyValue("top")) - 30}px`;
}

function moveDown() {
    characterStyle.top = `${extractNumbers(window.getComputedStyle(character).getPropertyValue("top")) + 30}px`;
}

function moveRight() {
    characterStyle.left = `${extractNumbers(window.getComputedStyle(character).getPropertyValue("left")) - 30}px`;
}

function moveLeft() {
    characterStyle.left = `${extractNumbers(window.getComputedStyle(character).getPropertyValue("left")) + 30}px`;
}