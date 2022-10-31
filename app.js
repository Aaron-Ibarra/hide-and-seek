// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

function handleGuess(correctSpot, userGuess) {
    treeContainer.classList.remove('face');
    shedContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    totalGuesses++;
    // then grab the appropriate container element for the correct guess from the DOM
    if (correctSpot === 'boulder') {
        correctSpot = document.getElementById('boulder-container');
        console.log(correctSpot);
    } else if (correctSpot === 'shed') {
        correctSpot = document.getElementById('shed-container');
        console.log(correctSpot);
    } else {
        correctSpot = document.getElementById('tree-container');
        console.log(correctSpot);
    }
    // then add the face class to that element so that the face shows up

    // then if the user guess is correct, increment the correct guesses
    if (correctSpot === userGuess) {
        totalWins;
    }
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}
