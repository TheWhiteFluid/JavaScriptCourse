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

let score = document.querySelector('.score').textContent;

document.querySelector('.number').textContent = secretNumber;

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
    //changing backgroud color
    document.querySelector('body').style.backgroundColor = '#33cc33';
    //changing number width
    document.querySelector('.number').style.width = '30rem';

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

//---------------------------------------------------------------------
// IMPLEMENTING THE GAME LOGIC ( up up )
