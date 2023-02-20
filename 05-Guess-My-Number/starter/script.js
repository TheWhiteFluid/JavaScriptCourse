'use strict';

// DOM MANIPULATION

/* <section class="right">
        <p class="message">Start guessing...</p> */

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number !';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

/* <input type="number" class="guess" /> */
console.log(document.querySelector('.guess').value); // the box is an empty value

document.querySelector('.guess').value = 23;

//---------------------------------------------------------------------
// HANDLING CLICK EVENTS

/* <button class="btn check">Check!</button> */
/* <input type="number" class="guess" /> */ //type-number --> value

// generatingthe random secret number that have to be guessed

const secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //guess default value in console is 0 (falsy value)
    document.querySelector('.message').textContent = 'No number !';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high !';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low !';
  } else {
    document.querySelector('.message').textContent = 'Try again :(';
  }
});

//---------------------------------------------------------------------
// IMPLEMENTING THE GAME LOGIC
