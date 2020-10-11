'use strict';
console.log('hello world');
var gBoard = [];
var gSize = 16;
var gShaffeledBoard = random16();
var timeInterval;
var timeCount;
var gCount=1;

function newGame() {
    gShaffeledBoard = [];
    gCount = 1;
    resetTime()
    random16();
    createBoard();
}

function resetTime() {
    var htmlTime = document.querySelector('.game-time');
    clearInterval(timeInterval);
    timeCount = 0;
    htmlTime.innerText = 'Game Time: ' + timeCount;
}


function gameTime() {
    var htmlTime = document.querySelector('.game-time');
    timeCount = 0;
    timeInterval = setInterval(function () {
        timeCount++;
        htmlTime.innerText = 'Game Time: ' + timeCount;
    }, 1000);
}

function clickNumber(button) {
    if (+button.innerText === gCount) {
        button.style = 'background-color: yellow';
        gCount++;
    }
    if (+button.innerText === 1) {
        gameTime();
    }
    if (+button.innerText === 16) {
        clearInterval(timeInterval)
    }
}

createBoard();
function createBoard() {
    var elBoard = document.querySelector('tbody');
    var htmlStr = '';
    var idx = 0;
    for (var i = 0; i < Math.sqrt(gSize); i++) {
        htmlStr += '<tr>';
        for (var j = 0; j < Math.sqrt(gSize); j++) {
            htmlStr += '<td><button id="' + idx + '" onclick="clickNumber(this)">' + gShaffeledBoard[idx] + '</button></td>';
            idx++;
        }
        htmlStr += '</tr>';
    }
    elBoard.innerHTML = htmlStr;
}
function random16() {
    var nums = [];
    for (var i = 1; i <= gSize; i++) {
        nums.push(i);
    }
    for (var x = 0; x < gSize; x++) {
        var idx = getRandomInt(1, nums.length);
        gBoard.push(nums[idx]);
        nums.splice(idx, 1);
    }
    return gBoard;
}

function getRandomInt(min, max) {
    var num = Math.floor((Math.random() * max - min) + min);
    return num;
}
