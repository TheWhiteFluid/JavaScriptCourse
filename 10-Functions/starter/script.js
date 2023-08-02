'use strict';

//FUNCTIONS WITH DEFAULT VALUES
const bookings = [];

const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 1,
  price2 = 1
) {
  const booking = {
    flightNum,
    numPassangers,
    price: 4 * numPassangers,
    price2,
  };
  console.log(booking);
  bookings.push(booking); // pushing result into the empty array for stacking vlaues
};

createBooking('F232');
createBooking('F232', 20);
createBooking('F232', undefined);

createBooking('F232', 20, undefined, 100);

/* There are 2 types of functions in JavaScrip:
    1) first-class functions
        - functions are simply values;
        - functions are just another 'type' of object

        ex: const add = (a,b) => a + b;

    2) higher-order functions
        - function receives another function as an argument
        - function returns a new functions, or both
        *possible just because of first-class functions 

        ex: const greet = () => console.log('Hey Stefan!);
            btnClose.addEventListener('click', greet);
*/

// HIGHER ORDER FUNCTIONS
console.log('HIGHER ORDER FUNCTIONS..........................................');

const oneWord = function (str) {
  return str.replace(/ /g, '').toLocaleLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

const strTransform = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
};

strTransform('welcome to the JavaScript!', oneWord);
strTransform('welcome to the JavaScript!', upperFirstWord);

const hi5 = function () {
  console.log(`Hi! You've clicked me :)`);
};

document.body.addEventListener('click', hi5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet('Hello ')('Steven');

const greetArrow = (greetArrow) => {
  return (name) => console.log(`${greetArrow} ${name}`);
};

greetArrow('Hi')('Jonas');

const lufthanse = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push(`flight:${this.iataCode}${flightNum}, ${name}`);
  },
};
console.log(lufthanse);
lufthanse.book(232, 'Pain');

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book2 = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push(`flight:${this.iataCode}${flightNum}, ${name}`);
};

// doesn't work because this pointer doen't know where to acctually point(object)
//book2(4226, 'Rava');

// instead we will use call function which indicates where this have to point
book2.call(euroWings, 339, 'Core');
book2.call(lufthanse, 4226, 'Ravanneli');
