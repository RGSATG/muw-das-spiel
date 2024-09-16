"use strict";

//This section is concerned with adding HTML elements

const gameContainer = document.getElementById("gameContainer");
const player = document.getElementById("player");
const startButton = document.getElementById("startButton");
const upArrow = document.getElementById("upArrow");
const downArrow = document.getElementById("downArrow");
const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");
const obstacle = document.getElementById("obstacle");

//This section is concerned with starting the game

startButton.addEventListener("click", () => {

    //buttons

    startButton.classList.add("hidden");
    upArrow.classList.remove("hidden");
    rightArrow.classList.remove("hidden");
    downArrow.classList.remove("hidden");
    leftArrow.classList.remove("hidden");
    
    //player

    player.style.display = "block";
    player.style.left = addPx(playerX);
    player.style.bottom = addPx(playerY);

    //obstacle

    obstacle.style.width = addPx(150);
    obstacle.style.height = addPx(300);
    obstacle.classList.remove("hidden");
    obstacle.style.left = addPx(450 - 75);
    obstacle.style.bottom = addPx(300 - 150);
}
);

//This section is concerned with the movement of the player

const playerWidth = player.style.width;
const playerHeight = player.style.height;
let playerX = player.style.left = getCenter(playerWidth, 0);
let playerY = player.style.bottom = getCenter(playerHeight, 0);
let stepLength = 15;

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
        player.style.bottom = addPx(playerY);
    }
}

function moveDown() {
    if (playerY > 0) {
        playerY -= stepLength;
        player.style.bottom = addPx(playerY);
    }
}

function moveRight() {
    if (playerX > 0) {
        playerX -= stepLength;
        player.style.left = addPx(playerX);
    }
}

function moveLeft() {
    if (playerX < 870) {
        playerX += stepLength;
        player.style.left = addPx(playerX);
    }
}