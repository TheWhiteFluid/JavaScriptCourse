'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0'); // # is used for id refference
const score1El = document.getElementById('score--1');

const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
currentScore0El.textContent = 0;
currentScore1El.textContent = 0;

diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

// ROLLING DICE button functionality
btnRoll.addEventListener('click', function () {
  // generating random dice roll
  const diceValue = Math.trunc(Math.random() * 6 + 1);
  console.log(diceValue);

  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceValue}.png`;

  // check for rolled 1: if true -> switch to next player
  //               if false -> add score(dice roll) at current score
  if (diceValue !== 1) {
    document.getElementById(`score--${activePlayer}`).textContent = diceValue;
    currentScore = currentScore + diceValue;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

// HOLD button functionality
btnHold.addEventListener('click', function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore + diceValue;
});

// NEW GAME functionality
btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  activePlayer = 0;
  currentScore = 0;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});
