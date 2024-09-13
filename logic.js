const character = document.getElementById("character");
const characterStyle = character.style;
const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");
const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");
let currentY = extractNumbers(window.getComputedStyle(character).getPropertyValue("bottom"));
let currentX = extractNumbers(window.getComputedStyle(character).getPropertyValue("left"));

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
    if (currentY < 570) {
        currentY += 30;
        characterStyle.bottom = `${currentY}px`;
    }
}

function moveDown() {
    if (currentY > 0) {
        currentY -= 30;
        characterStyle.bottom = `${currentY}px`;
    }
}

function moveRight() {
    if (currentX > 0) {
        currentX -= 30;
        characterStyle.left = `${currentX}px`;
    }
}

function moveLeft() {
    if (currentX < 870) {
        currentX += 30;
        characterStyle.left = `${currentX}px`;
    }
}