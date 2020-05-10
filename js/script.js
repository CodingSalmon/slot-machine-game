//Pseudocode
//Modal pops up asking for how much money the person wants to input.
//Changes that money into tokens for game.
//Have a display that shows chances for certain icons and payout amounts for matches.
//Person can toggle how many tokens they want to bet at a time.
//Once chosen they pull the lever to start the spinning.(Lever resets after being clicked).
//While spinning is happening stars light up.
//(Hopefully) Each roller will roll through 3 random icons before landing on the icon that will be chosen.
//After the 3 rollers are done choosing check for matches, doll out tokens accordingly.
//Display amount of tokens won if they match 3 of a certain icon.
//Player does not have to pick amount of tokens to bet but can choose to change amount.

// Constants
const icons = {
    diamond: 'images/diamond.png',
    bar: 'images/bar.png',
    bell: 'images/bell.png',
    cherry: 'images/cherry.png',
    horseshoe: 'images/horseshoe.png',
    grape: 'images/grape.png',
    lemon: 'images/lemon.png'
}

const modalOptions = {
    inDuration:250
}

// Variables
let dollars;
let coins;
let roller1 = null;
let roller2 = null;
let roller3 = null;

// Cached DOM Elements
let rollerEl1 = document.querySelector('#roller1 > img');
let rollerEl2 = document.querySelector('#roller2 > img');
let rollerEl3 = document.querySelector('#roller3 > img');
let addMoneyEl = document.querySelector('#addMoney');
let playButton = document.querySelector('#playButton');

// Event Listeners
document.addEventListener('DOMContentLoaded', openModal);
addMoneyEl.addEventListener('click',openModal);
playButton.addEventListener('click', handlePlayClick);

// Functions
init();

function init() {
    
    render();
};

function render(){
    rollerEl1.src = icons[roller1];
    rollerEl2.src = icons[roller2];
    rollerEl3.src = icons[roller3];
    checkWin();
};

function handlePlayClick(){
    rollRoller1();
    rollRoller2();
    rollRoller3();

    render();
}

function rollRoller1(){
    num = getRandomInt(100);
    if (num === 1)
        roller1 = 'seven';
    if (num >= 2 && num <= 5)
        roller1 = 'bar';
    if (num >= 6 && num <= 15)
        roller1 = 'bell';
    if (num >= 16 && num <= 30)
        roller1 = 'cherry';
    if (num >= 31 && num <= 50)
        roller1 = 'horseshoe';
    if (num >= 51 && num <= 70)
        roller1 = 'grape';
    if (num >= 71 && num <= 100)
        roller1 = 'lemon';
};

function rollRoller2(){
    num = getRandomInt(100);
    if (num === 1)
        roller2 = 'seven';
    if (num >= 2 && num <= 5)
        roller2 = 'bar';
    if (num >= 6 && num <= 15)
        roller2 = 'bell';
    if (num >= 16 && num <= 30)
        roller2 = 'cherry';
    if (num >= 31 && num <= 50)
        roller2 = 'horseshoe';
    if (num >= 51 && num <= 70)
        roller2 = 'grape';
    if (num >= 71 && num <= 100)
        roller2 = 'lemon';
};

function rollRoller3(){
    num = getRandomInt(100);
    if (num === 1)
        roller3 = 'seven';
    if (num >= 2 && num <= 5)
        roller3 = 'bar';
    if (num >= 6 && num <= 15)
        roller3 = 'bell';
    if (num >= 16 && num <= 30)
        roller3 = 'cherry';
    if (num >= 31 && num <= 50)
        roller3 = 'horseshoe';
    if (num >= 51 && num <= 70)
        roller3 = 'grape';
    if (num >= 71 && num <= 100)
        roller3 = 'lemon';
};

function openModal(){
    M.Modal.init(document.querySelector('.modal'),modalOptions);
}

function getRandomInt(num){
    return Math.floor((Math.random() * num) + 1);
}

function checkWin(){
    if ((rollerEl1.src === rollerEl2.src && rollerEl2.src === rollerEl3.src) && roller1 !== null)
        console.log('winner');
    else
        console.log('loser');
}