'use strict';

// DOM MANIPULATION

/* <section class="right">
        <p class="message">Start guessing...</p> */

//---------------------------------------------------------------------
// HANDLING CLICK EVENTS

/* <button class="btn check">Check!</button> */
/* <input type="number" class="guess" /> */ //type-number --> value

// generatingthe random secret number that have to be guessed
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayGuessNumber = function (guessNumber) {
  document.querySelector('.guess').value = guessNumber;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

//CHECK BUTTON EVENT CLICK
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    //guess default value in console is 0 (falsy value)
    displayMessage('No number !');

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('Correct Number !');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#33cc33';
    document.querySelector('.number').style.width = '30rem'; //changing number width

    if (score > highScore) {
      highScore = score;
      displayHighScore(score);
    }
  }

  // WHEN GUESS IS DIFFERENT
  else if (guess !== secretNumber) {
    if (score > 1) {
      score = score - 1;
      displayScore(score);
      displayMessage(guess > secretNumber ? 'Too high !' : 'Too low !');
    } else {
      displayScore(0);
      displayMessage('You lost the game ! :(');
    }
  }
});

//AGAIN! BUTTON EVENT CLICK
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayScore(score);
  displayMessage('Start guessing...');
  displayNumber('?');
  displayGuessNumber('');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
//---------------------------------------------------------------------
// IMPLEMENTING THE GAME LOGIC (UP UP)
