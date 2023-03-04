'use strict';

// selecting element by defining variables for future use
const score0 = document.querySelector('#score--0'); // # is used for id refference
const score1 = document.getElementById('score--1');

const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;

currentScore0.textContent = 0;
currentScore1.textContent = 0;

dice.classList.add('hidden');
