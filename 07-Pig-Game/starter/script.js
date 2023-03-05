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

// defining variables for future use
let currentScore = 0;
let activePlayer = 0;

let scores = [0, 0];

let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  playing = true;

  diceEl.classList.add('hidden');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

//--------- GAME BUTTONS FUNCTIONALITY --------------
// ROLLING DICE
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generating random dice roll
    const diceValue = Math.trunc(Math.random() * 6 + 1);
    console.log(diceValue);

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceValue}.png`;

    // check for rolled 1: if true -> switch to next player if false -> add score(dice roll) at current score
    if (diceValue !== 1) {
      currentScore = currentScore + diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// HOLD
btnHold.addEventListener('click', function () {
  if (playing) {
    //add player's score to the current score
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //100 points condition - game over
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// NEW GAME
btnNew.addEventListener('click', init);
