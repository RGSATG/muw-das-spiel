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

//This section is concerned with setting the parameters of the game content

//obstacle
const obstacleHeight = 300;
const obstacleWidth = 150;
const obstacleBoundBottom = 150;
const obstacleBoundLeft = 375;
const obstacleBoundTop = obstacleBoundBottom + obstacleHeight;
const obstacleBoundRight = obstacleBoundLeft + obstacleWidth;

//player
const playerWidth = 30;
const playerHeight = 30;
let playerBoundBottom = 0;
let playerBoundLeft = 0;
let playerBoundTop = playerBoundBottom + playerHeight;
let playerBoundRight = playerBoundLeft + playerWidth;
let playerX = getCenter(playerWidth, playerBoundLeft);
let playerY = getCenter(playerHeight, playerBoundRight);
let stepLength = 15;

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
    player.style.width = addPx(playerWidth);
    player.style.height = addPx(playerHeight);
    player.style.left = addPx(playerBoundLeft);
    player.style.bottom = addPx(playerBoundBottom);

    //obstacle
    obstacle.style.width = addPx(obstacleWidth);
    obstacle.style.height = addPx(obstacleHeight);
    obstacle.classList.remove("hidden");
    obstacle.style.left = addPx(obstacleBoundLeft);
    obstacle.style.bottom = addPx(obstacleBoundBottom);
}
);

//This section is concerned with the movement of the player

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

function checkObstruction(direction) {
    return (direction === "top" &&
    playerBoundTop >= obstacleBoundBottom &&
    playerBoundRight > obstacleBoundLeft &&
    playerBoundLeft < obstacleBoundRight &&
    playerBoundBottom < obstacleBoundTop ||
    direction === "right" &&
    playerBoundRight >= obstacleBoundLeft &&
    playerBoundTop > obstacleBoundBottom &&
    playerBoundBottom < obstacleBoundTop &&
    playerBoundLeft < obstacleBoundRight ||
    direction === "bottom" &&
    playerBoundBottom <= obstacleBoundTop &&
    playerBoundRight > obstacleBoundLeft &&
    playerBoundLeft < obstacleBoundRight &&
    playerBoundTop > obstacleBoundBottom ||
    direction === "left" &&
    playerBoundLeft <= obstacleBoundRight &&
    playerBoundTop > obstacleBoundBottom &&
    playerBoundBottom < obstacleBoundTop &&
    playerBoundRight > obstacleBoundLeft)
}

function moveUp() {
    if (playerY < 570 && !checkObstruction("top")) {
        playerY += stepLength;
        playerBoundTop += stepLength;
        playerBoundBottom += stepLength;
        player.style.bottom = addPx(playerBoundBottom);
    }
}

function moveDown() {
    if (playerY > 0 && !checkObstruction("bottom")) {
        playerY -= stepLength;
        playerBoundTop -= stepLength;
        playerBoundBottom -= stepLength;
        player.style.bottom = addPx(playerBoundBottom);
    }
}

function moveRight() {
    if (playerX > 0 && !checkObstruction("right")) {
        playerX += stepLength;
        playerBoundRight += stepLength;
        playerBoundLeft += stepLength;
        player.style.left = addPx(playerBoundLeft);
    }
}

function moveLeft() {
    if (playerX < 870 && !checkObstruction("left")) {
        playerX -= stepLength;
        playerBoundRight -= stepLength;
        playerBoundLeft -= stepLength;
        player.style.left = addPx(playerBoundLeft);
    }
}