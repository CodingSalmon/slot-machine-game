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
    seven = {
        chance: 1,
        imgPath:images/seven.png
    },
    [2]: 'bar',
    [6]: 'bell',
    [16]: 'cherry',
    [31]: 'grape',
    [51]: 'orange',
    [76]: 'lemon'
}

const modalOptions = {
    inDuration:250
}
// Variables
let dollars;
let coins;

// Cached DOM Elements
let rollerEl1;
let rollerEl2;
let rollerEl3;


// Event Listeners
document.addEventListener('DOMContentLoaded', openModal);
document.querySelector('#addMoney').addEventListener('click',openModal);

// Functions
init();

function init() {

    render();
};

function render(){


};

function rollRoller(){

};

function openModal(){
    M.Modal.init(document.querySelector('#modal'),modalOptions);
}