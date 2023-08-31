'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// ARRAY METHODS

// SLICE (will not change the original array)
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr);

console.log(arr.slice(2)); // c d e
console.log(arr.slice(2, 4)); // c d
console.log(arr.slice(2, 3)); // c

console.log(arr.slice(-2)); // d e
console.log(arr.slice(1, -2)); // b c

// SPLICE (work as slice method but this will change the original array)
console.log(arr.splice(-1));
console.log(arr); // will cut elements from the initial array

console.log(arr.splice(1, 2)); //second parameter represents nr.of deleted elem
console.log(arr);

// REVERSE
let arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.reverse());
console.log(arr2); // will mutuate the initial array

//CONCAT
console.log(arr);
console.log(arr2);
const letters = arr.concat(arr2);
console.log(letters);
//or
console.log([...arr, ...arr2]); //using SPREAD operator

//JOIN
console.log(letters.join('-')); //result will be always a string

//AT (good for method chaining)
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

console.log(arr3[arr3.length - 1]);
console.log(arr3.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

// FOR EACH METHOD(array) different from FOR OF
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('---- FOR OF ----');
//for(const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOR EACH ----'); //needs a callback function !!!
//movements.forEach(function (movement) {
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// FOREACH MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (key, value, map) {
  console.log(`${key}: ${value}`);
});

//FOREACH SET
const uniqueCurrencies = new Set(['USD', 'EUR', 'GBP']);
console.log(uniqueCurrencies);

uniqueCurrencies.forEach(function (value, _, set) {
  console.log(`${value}: ${_}`);
});
//sets dont have keys, it have only values
