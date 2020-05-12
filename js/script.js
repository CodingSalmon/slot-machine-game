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
    undefined: 'images/undefined.png'
}

const difficulty = {
    e: 1,
    m: 5,
    h: 10
}


// Variables
let dollars;
let coins;
let winner;
let roller1;
let roller2;
let roller3;
let currentDif;
let isRolling;

// Cached DOM Elements
const modalEl1 = document.querySelector('#modal1');
const modalEl2 = document.querySelector('#modal2');
let rollerEl1 = document.querySelector('#roller1 > img');
let rollerEl2 = document.querySelector('#roller2 > img');
let rollerEl3 = document.querySelector('#roller3 > img');
let addMoneyEl = document.querySelector('#addMoney');
let playButtonEl = document.querySelector('#playButton');
let coinDisplayEl = document.querySelector('#coinDisp');

// Event Listeners
document.addEventListener('DOMContentLoaded', openModal1);
addMoneyEl.addEventListener('click',openModal1);
playButtonEl.addEventListener('click', handlePlayClick);

// Functions
init();

function init() {
    coins = 0;
    winner = null;
    roller1 = undefined;
    roller2 = undefined;
    roller3 = undefined;
    currentDif = 'e';
    isRolling = false;

    render();
};

function render(){
    rollerEl1.src = icons[roller1];
    rollerEl2.src = icons[roller2];
    rollerEl3.src = icons[roller3];
    coinDisplayEl.innerHTML = `Current Coins:<br>${coins}`;

    checkWin();
};

function handlePlayClick(){
    if (isRolling)
        return;
    isRolling = true;
    rollRoller1();
    setTimeout(() => {rollRoller2();render();},500);
    setTimeout(() => {rollRoller3();render();isRolling = false;},1000);

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
    if (num >= 23 && num <= 45)
        roller1 = 'horseshoe';
    if (num >= 46 && num <= 65)
        roller1 = 'cherry';
    if (num >= 66 && num <= 100)
        roller1 = 'grape';
};

function rollRoller2(){
    num = getRandomInt(100);
    if (num >= 1 && num <= 2)
        roller2 = 'diamond';
    if (num >= 3 && num <= 10)
        roller2 = 'bar';
    if (num >= 11 && num <= 22)
        roller2 = 'bell';
    if (num >= 23 && num <= 45)
        roller2 = 'horseshoe';
    if (num >= 46 && num <= 65)
        roller2 = 'cherry';
    if (num >= 66 && num <= 100)
        roller2 = 'grape';
};

function rollRoller3(){
    num = getRandomInt(100);
    if (num >= 1 && num <= 2)
        roller3 = 'diamond';
    if (num >= 3 && num <= 10)
        roller3 = 'bar';
    if (num >= 11 && num <= 22)
        roller3 = 'bell';
    if (num >= 23 && num <= 45)
        roller3 = 'horseshoe';
    if (num >= 46 && num <= 65)
        roller3 = 'cherry';
    if (num >= 66 && num <= 100)
        roller3 = 'grape';
};

function openModal1(){
    M.Modal.init(modalEl1,{}).open();
}

// function openModal2(){
//     M.Modal.init(modalEl2,{}).open();
// }

function getRandomInt(num){
    return Math.floor((Math.random() * num) + 1);
}

function checkWin(){
    if ((rollerEl1.src === rollerEl2.src && rollerEl2.src === rollerEl3.src) && roller1 !== undefined){
        if(roller1 === 'diamond')
            winner = 'diamond';
        if(roller1 === 'bar')
            winner = 'bar';
        if(roller1 === 'bell')
            winner = 'bell';
        if(roller1 === 'horseshoe')
            winner = 'horseshoe';
        if(roller1 === 'cherry')
            winner = 'cherry';
        if(roller1 === 'grape')
            winner = 'grape';
        addCoins();
    }
    else
        winner = null;
}

function addCoins(){
    if(winner === 'diamond')
        coins += 50;
    if(winner === 'bar')
        coins += 10;
    if(winner === 'bell')
        coins += 5;
    if(winner === 'horseshoe')
        coins += 3;
    if(winner === 'cherry')
        coins += 2;
    if(winner === 'grape')
        coins += 1;
    
}