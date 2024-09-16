//This section is concerned with adding HTML elements
const character = document.getElementById("character");
const startButton = document.getElementById("startButton");

//This section is concerned with starting the game
startButton.addEventListener("click", () => {
    character.style.display = "block";
    character.style.left = addPx(playerX);
    character.style.bottom = addPx(playerY);
    startButton.style.display = "none";
}
);

//This section is concerned with the movement of the player
const characterStyle = character.style;
const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");
const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");
const playerWidth = character.style.width;
const playerHeight = character.style.height;
let playerX = characterStyle.left = getCenter(playerWidth, 0);
let playerY = characterStyle.bottom = getCenter(playerHeight, 0);
let stepLength = 30;

function addPx(num) {
    return `${num}px`;
}

function getCenter(size, position) {
    return position + size / 2;
}

upArrow.addEventListener("click", moveUp);
downArrow.addEventListener("click", moveDown);
leftArrow.addEventListener("click", moveLeft);
rightArrow.addEventListener("click", moveRight);

function moveUp() {
    if (playerY < 570) {
        playerY += stepLength;
        characterStyle.bottom = addPx(playerY);
    }
}

function moveDown() {
    if (playerY > 0) {
        playerY -= stepLength;
        characterStyle.bottom = addPx(playerY);
    }
}

function moveRight() {
    if (playerX > 0) {
        playerX -= stepLength;
        characterStyle.left = addPx(playerX);
    }
}

function moveLeft() {
    if (playerX < 870) {
        playerX += stepLength;
        characterStyle.left = addPx(playerX);
    }
}