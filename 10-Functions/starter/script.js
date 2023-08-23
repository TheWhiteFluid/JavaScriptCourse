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

//THE CALL() METHOD

//book2(4226, 'Rava');
// doesn't work because this pointer doen't know where to acctually point(object)

// instead we will use call function which indicates where this have to point
book2.call(euroWings, 339, 'Core');
book2.call(lufthanse, 4226, 'Ravanneli');

const flightDetails = [231421, 'Smith'];
book2.call(euroWings, ...flightDetails);

//THE BIND() METHOD
const book2LW = book2.bind(lufthanse);
const book2EW = book2.bind(euroWings);

book2LW(23, 'Steven');
book2EW(34, 'John');

//case1: function definet out of the object (is not an object method)
euroWings.planes = 300;
const buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

console.log(euroWings);

document
  .querySelector('.buy')
  .addEventListener('click', buyPlane.bind(euroWings));

//case2: function attribuited to the object (becomes an object method)
lufthanse.planes = 400;
lufthanse.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

console.log(lufthanse);

document
  .querySelector('.buy')
  .addEventListener('click', lufthanse.buyPlane.bind(lufthanse));

//PARTIAL APPLICATION FOR BIND METHOD

const addTax = (rate, value) => value + rate * value;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23); // VAT value settet to 23% (first argment represent this keyword(where function to point))
console.log(addVAT(100));

//rewriting the above code using returning a function inside of another function (recursive functions)
const addTax2 = function (rate) {
  return function (value) {
    return value + rate * value;
  };
};

const addVAT2 = addTax2(0.23);

console.log(addVAT2(100));

//CODING CHALLANGE
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};

// adding registerNewAnswer method to the poll object
poll.registerNewAnswer = function () {
  const answer = Number(
    prompt(`${this.question} \n ${this.options.join('\n')}`)
  );
  typeof answer === 'number' &&
    answer < this.options.length &&
    this.answers[answer]++; //END shot circuiting (replacing if statement)

  console.log(this.answers);

  this.displayResults();
  this.displayResults('string');
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type = 'array') {
  //type can be string or array // prompt will genereate string type always
  if (type === 'array') {
    console.log(this.answers);
  } else if (type === 'string') {
    console.log(`Poll results are: ${this.answers.join(', ')}`);
  } else {
    console.log('Wrong input!');
  }
};

const bonusTestData1 = {
  answers: [5, 2, 3],
};
const bonusTestData2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

poll.displayResults.call(bonusTestData1);
poll.displayResults.call(bonusTestData1, 'string');

poll.displayResults.call(bonusTestData2);
poll.displayResults.call(bonusTestData2, 'string');
