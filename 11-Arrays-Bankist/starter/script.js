'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

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

////////////////////////////////////
///// BANKIST APP DEVELOPMENT PROCCESS
//DATA
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

const movementsContainer = document.querySelector('.movements');

const accounts = [account1, account2, account3, account4];

const displayMovements = function (movements) {
  containerMovements.innerHTML = ' '; //empty the html code from index(the default one) uwing 'innerHTML' method

  movements.forEach(function (mov, i) {
    console.log(`${i}: ${mov}`);

    const movementType = mov > 0 ? 'deposit' : 'withdrawal';

    // replacing inside of the html code using template literals
    const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${movementType}">${
      i + 1
    } ${movementType}</div>
        <div class="movements__value">${mov}€</div>
        </div>
      `;
    // inserting modified html code back into the container using 'inserAdjacentHTML' method
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account3.movements);

//selected movements container
/* const containerMovements = document.querySelector('.movements') */

//APP CLASS FROM INDEX.HTML -> movements real time changes
/* <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--deposit">2 deposit</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">4 000€</div>
        </div>
        <div class="movements__row">
          <div class="movements__type movements__type--withdrawal">
            1 withdrawal
          </div>
          <div class="movements__date">24/01/2037</div>
          <div class="movements__value">-378€</div>
        </div>
      </div>
  */

//coding challange
//data example:

const arr11 = ['dog1', 3]; //cat
const arr22 = ['dog2', 5];
const arr33 = ['dog3', 2];
const arr44 = ['dog4', 12]; //cat
const arr55 = ['dog5', 7]; //cat

const arr111 = ['dog6', 4];
const arr222 = ['dog7', 1];
const arr333 = ['dog8', 15];
const arr444 = ['dog9', 8];
const arr555 = ['dog10', 3];

let dogsJulia = [arr11, arr22, arr33, arr44, arr55];
let dogsKate = [arr111, arr222, arr333, arr444, arr555];

const checkDogs = function (dogsJulia, dogsKate) {
  const onlydogsJulia = dogsJulia.slice(1, 3);

  const allDogs = [...onlydogsJulia, ...dogsKate];
  console.log(allDogs);

  allDogs.forEach(function (value, i, _) {
    if (value.at(1) >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${value.at(1)} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy !`);
    }
  });
};

checkDogs(dogsJulia, dogsKate);

//DATA TRANSFORMATION METHODS

// 1) MAP --> same as forEach(is using a callback function for each element of the array HOWEVER is more usefull because will create a NEW array with the mapped elements)

// 2) FILTER --> same as MAP method HOWEVER this method will create a new array with the filtered values of the initial array

// 3) REDUCE -- same as MAP method HOWEVER for this method we have to specify an accumulator(an element with rest of the elements will be summing up) afterwards this method will create a new array with a single element which represents the total sum of the values of the initial array :p

//MAP METHOD
console.log('------ MAP METHOD -------');
