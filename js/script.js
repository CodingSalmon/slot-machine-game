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
    lemon: 'images/lemon.png',
    undefined: 'images/undefined.png'
}

const modalOptions = {
    inDuration:250
}

// Variables
let dollars;
let coins;
let roller1 = undefined;
let roller2 = undefined;
let roller3 = undefined;

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
    if (num >= 1 && num <= 2)
        roller1 = 'diamond';
    if (num >= 3 && num <= 10)
        roller1 = 'bar';
    if (num >= 11 && num <= 22)
        roller1 = 'bell';
    if (num >= 23 && num <= 40)
        roller1 = 'cherry';
    if (num >= 41 && num <= 55)
        roller1 = 'horseshoe';
    if (num >= 56 && num <= 75)
        roller1 = 'grape';
    if (num >= 76 && num <= 100)
        roller1 = 'lemon';
};

function rollRoller2(){
    num = getRandomInt(100);
    if (num >= 1 && num <= 2)
        roller2 = 'diamond';
    if (num >= 3 && num <= 10)
        roller2 = 'bar';
    if (num >= 11 && num <= 22)
        roller2 = 'bell';
    if (num >= 23 && num <= 40)
        roller2 = 'cherry';
    if (num >= 41 && num <= 55)
        roller2 = 'horseshoe';
    if (num >= 56 && num <= 75)
        roller2 = 'grape';
    if (num >= 76 && num <= 100)
        roller2 = 'lemon';
};

function rollRoller3(){
    num = getRandomInt(100);
    if (num >= 1 && num <= 2)
        roller3 = 'diamond';
    if (num >= 3 && num <= 10)
        roller3 = 'bar';
    if (num >= 11 && num <= 22)
        roller3 = 'bell';
    if (num >= 23 && num <= 40)
        roller3 = 'cherry';
    if (num >= 41 && num <= 55)
        roller3 = 'horseshoe';
    if (num >= 56 && num <= 75)
        roller3 = 'grape';
    if (num >= 76 && num <= 100)
        roller3 = 'lemon';
};

function openModal(){
    M.Modal.init(document.querySelector('.modal'),modalOptions);
}

function getRandomInt(num){
    return Math.floor((Math.random() * num) + 1);
}

function checkWin(){
    if ((rollerEl1.src === rollerEl2.src && rollerEl2.src === rollerEl3.src) && roller1 !== undefined)
        console.log('winner');
    else
        console.log('loser');
}