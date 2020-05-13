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
};
const difficulty = {
    e: 1,
    m: 5,
    h: 10
};
// Variables
let dollars, coins, winner, roller1, roller2, roller3, currentDif, isRolling;
// Cached DOM Elements
const modalEl1 = document.querySelector('#modal1');
const modalEl2 = document.querySelector('#modal2');
const modalEl3 = document.querySelector('#modal3');
const winModalContentEl = document.querySelector('#winModal');

let moneyEl1 = document.querySelector('#money1');
let moneyEl2 = document.querySelector('#money2');
let coinDisplayEl = document.querySelector('#coinDisp');
let addMoneyEl = document.querySelector('#addMoney');
let msgEl = document.querySelector('#msg');
let rollerEl1 = document.querySelector('#roller1 > img');
let rollerEl2 = document.querySelector('#roller2 > img');
let rollerEl3 = document.querySelector('#roller3 > img');
let buttonAreaEl = document.querySelector('#buttonArea');
let easyButton = document.querySelector('#difE');
let medButton = document.querySelector('#difM');
let hardButton = document.querySelector('#difH');
let playButtonEl = document.querySelector('#playButton');
let rewardDispEl = document.querySelector('#rewardDisplay');
// Event Listeners
document.addEventListener('DOMContentLoaded', openModal1);
addMoneyEl.addEventListener('click',openModal1);
playButtonEl.addEventListener('click', handlePlayClick);
document.querySelector('#getMoneyButton1').addEventListener('click',getMoney1);
document.querySelector('#getMoneyButton2').addEventListener('click',getMoney2);
buttonAreaEl.addEventListener('click',setDifficulty);
document.querySelector('#displayToggle').addEventListener('click',toggleReward);
document.querySelector('#audioToggle').addEventListener('click',toggleAudio);
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

function initMsg(){
    msgEl.innerText = `Welcome!`;
};

function render(){
    rollerEl1.src = icons[roller1];
    rollerEl2.src = icons[roller2];
    rollerEl3.src = icons[roller3];
    if(isNaN(coins)) coins = 0;
    coinDisplayEl.innerHTML = `Current Coins:<br>${coins}`;
    msgEl.innerText = `You are currently betting ${difficulty[currentDif]} coins.`
};

function handlePlayClick(){
    if (isRolling) return;
    if (coins < difficulty[currentDif] || isNaN(coins)){
        openModal2();
        return;
    };
    isRolling = true;
    coins -= difficulty[currentDif];

    rollRoller1();
    render();
    setTimeout(() => {rollRoller2();render();},500);
    setTimeout(() => {rollRoller3();render();checkWin();isRolling = false;render();},1000);
};

function rollRoller1(){
    num = getRandomInt(100);
    if (num >= 1 && num <= 2) roller1 = 'diamond';
    if (num >= 3 && num <= 10) roller1 = 'bar';
    if (num >= 11 && num <= 22) roller1 = 'bell';
    if (num >= 23 && num <= 35) roller1 = 'horseshoe';
    if (num >= 36 && num <= 50) roller1 = 'cherry';
    if (num >= 51 && num <= 100) roller1 = 'grape';
};

function rollRoller2(){
    num = getRandomInt(100);
    if (num >= 1 && num <= 2) roller2 = 'diamond';
    if (num >= 3 && num <= 10) roller2 = 'bar';
    if (num >= 11 && num <= 22) roller2 = 'bell';
    if (num >= 23 && num <= 35) roller2 = 'horseshoe';
    if (num >= 36 && num <= 50) roller2 = 'cherry';
    if (num >= 51 && num <= 100) roller2 = 'grape';
};

function rollRoller3(){
    num = getRandomInt(100);
    if (num >= 1 && num <= 2) roller3 = 'diamond';
    if (num >= 3 && num <= 10) roller3 = 'bar';
    if (num >= 11 && num <= 22) roller3 = 'bell';
    if (num >= 23 && num <= 35) roller3 = 'horseshoe';
    if (num >= 36 && num <= 50) roller3 = 'cherry';
    if (num >= 51 && num <= 100) roller3 = 'grape';
};

function openModal1(){
    M.Modal.init(modalEl1,{}).open();
};

function openModal2(){
    M.Modal.init(modalEl2,{}).open();
};

function openModal3(){
    M.Modal.init(modalEl3,{}).open();
};

function getRandomInt(num){
    return Math.floor((Math.random() * num) + 1);
};

function checkWin(){
    if ((rollerEl1.src === rollerEl2.src) && (rollerEl2.src === rollerEl3.src)){
        if(roller1 === 'diamond'){
            winner = 'diamond';
            winModalContentEl.innerHTML = `<h3>You Won!</h3><p>You matched 3 ${winner}s while betting ${difficulty[currentDif]} coins and won ${20 * difficulty[currentDif]} coins!</p>`;
        }
        if(roller1 === 'bar'){
            winner = 'bar'; openModal3();
            winModalContentEl.innerHTML = `<h3>You Won!</h3><p>You matched 3 ${winner}s while betting ${difficulty[currentDif]} coins and won ${10 * difficulty[currentDif]} coins!</p>`;
        }
        if(roller1 === 'bell'){
            winner = 'bell'; openModal3();
            winModalContentEl.innerHTML = `<h3>You Won!</h3><p>You matched 3 ${winner}s while betting ${difficulty[currentDif]} coins and won ${5 * difficulty[currentDif]} coins!</p>`;
        }
        if(roller1 === 'horseshoe'){
            winner = 'horseshoe'; openModal3();
            winModalContentEl.innerHTML = `<h3>You Won!</h3><p>You matched 3 ${winner}s while betting ${difficulty[currentDif]} coins and won ${3 * difficulty[currentDif]} coins!</p>`;
        }
        if(roller1 === 'cherry'){
            winner = 'cherry'; openModal3();
            winModalContentEl.innerHTML = `<h3>You Won!</h3><p>You matched 3 ${winner}s while betting ${difficulty[currentDif]} coins and won ${2 * difficulty[currentDif]} coins!</p>`;
        }
        if(roller1 === 'grape'){
            winner = 'grape'; openModal3();
            winModalContentEl.innerHTML = `<h3>You Won!</h3><p>You matched 3 ${winner}s while betting ${difficulty[currentDif]} coins and won ${1 * difficulty[currentDif]} coins!</p>`;
        }
        openModal3();
        addCoins();
    }
    else{
        winner = null;
    }
};

function addCoins(){
    if(winner === 'diamond') coins += (50 * difficulty[currentDif]);
    if(winner === 'bar') coins += (20 * difficulty[currentDif]);
    if(winner === 'bell') coins += (10 * difficulty[currentDif]);
    if(winner === 'horseshoe') coins += (5 * difficulty[currentDif]);
    if(winner === 'cherry') coins += (2 * difficulty[currentDif]);
    if(winner === 'grape') coins += (1 * difficulty[currentDif]);
};

function getMoney1(){
    dollars = Math.floor(parseInt(moneyEl1.value));
    if(isNaN(dollars))return;
    coins += (5 * dollars);
    render();
    initMsg();
};

function getMoney2(){
    dollars = Math.floor(parseInt(moneyEl2.value));
    coins += (5 * dollars);
    render();
    initMsg();
};

function setDifficulty(e){
    if(e.target === buttonAreaEl) return;
    if(e.target === easyButton) currentDif = 'e';
    if(e.target === medButton) currentDif = 'm';
    if(e.target === hardButton) currentDif = 'h';
    render();
};

function toggleReward(){
    rewardDispEl.style.visiblity;
}

function toggleAudio(){

}