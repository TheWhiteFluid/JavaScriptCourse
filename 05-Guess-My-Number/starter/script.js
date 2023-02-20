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

document.querySelector('.check').addEventListener('click', function () {});
