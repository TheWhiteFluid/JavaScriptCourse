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

//CHECK BUTTON EVENT CLICK
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    //guess default value in console is 0 (falsy value)
    document.querySelector('.message').textContent = 'No number !';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !';
    document.querySelector('.number').textContent = secretNumber;
    //changing backgroud color
    document.querySelector('body').style.backgroundColor = '#33cc33';
    //changing number width
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high !';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ! :(';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low !';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ! :(';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//AGAIN! BUTTON EVENT CLICK
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
//---------------------------------------------------------------------
// IMPLEMENTING THE GAME LOGIC (UP UP)
