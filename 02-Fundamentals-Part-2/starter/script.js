'use strict';

let hasDriverLincense = false;
const passTest = true;
//------------------------------------------------------------------------------------------------
// FUNCTIONS
function logger() {
  console.log("My name is Paain");
}
logger();


function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice; // it returns a value which must be encolsed into a variable;
}

const appleJuice = fruitProcessor(5, 0);
console.log(`Only apples: ${appleJuice}`);
//console.log(`Only apples: ${fruitProcessor(5, 0)}`);

const appleOrangeJuice = fruitProcessor(5, 2);
console.log(`Apples and oranges: ${appleOrangeJuice}`);
//console.log(`Apples and oranges: ${fruitProcessor(5, 2)}`)

const orangeJuice = fruitProcessor(0, 5);
console.log(`Only oranges: ${orangeJuice}`);
//console.log(`Only oranges: ${fruitProcessor(0, 5)}`);

//------------------------------------------------------------------------------------------------
// FUNCTION DECLARATION (you can call the function before/after you define it)
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(1999);
console.log(age1);

//------------------------------------------------------------------------------------------------
//FUNCTION EXPRESSION (you can call the function ONLY AFTER you define it)
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
}
const age2 = calcAge2(1999);
console.log(age2);

//------------------------------------------------------------------------------------------------
//ARROW FUNCTION
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = birthYear => {
  const age = 2023 - birthYear;
  const yearsLeft = 65 - age;
  return yearsLeft;
}
console.log(yearsUntilRetirement(1991));

const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const yearsLeft = 65 - age;
  return `${firstName} retires in ${yearsLeft} years.`
}
console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1980, 'Bob'));

function yearsUntilRetirement3(birthYear, firstName) {
  const age = 2023 - birthYear;
  const yearsLeft = 65 - age;
  const namez = firstName;
  return `${age}, ${yearsLeft}, ${namez}`;
}
console.log(yearsUntilRetirement3(1999, 'Stefan'));

const yearsUntilRetirement4 = function (birthYear, firstName) {
  const age = 2023 - birthYear;
  const yearsLeft = 65 - age;
  const namez = firstName;
  return `${age}, ${yearsLeft}, ${namez}`;
}
console.log(yearsUntilRetirement4(1998, 'Steven'));

//------------------------------------------------------------------------------------------------
// FUNCTION CALL INSIDE OF OTHER FUNCTION
function fruitSlicer(fruits) {
  return fruits * 10;
}

const fruitProcessor2 = function (noApples, noOranges) {
  const appleSlices = fruitSlicer(noApples);
  const orangeSlices = fruitSlicer(noOranges);

  return `This juice is made by ${appleSlices} apple slices and ${orangeSlices} orange slices.`;
}
console.log(fruitProcessor2(2, 3));


function ageCalculator(birthYear) {
  return 2023 - birthYear;
}

const yearsUntilRetirement5 = function (birthYear, firstName) {
  const age = ageCalculator(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired :).`);
    return -1;
  }
}

console.log(yearsUntilRetirement5(1999, 'Jonas'));
console.log(yearsUntilRetirement5(1900, 'Dilan'));

//Coding challenge 1
/*TEST DATA1: Dolphins score 44, 23 and 71
              Koalas score 65, 54 and 49 */

/*TEST DATA2: Dolphins score 85, 54 and 41
              Koalas score 23, 34 and 27 */

const averageScore = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
}
//DATA1
let avgDolphins = averageScore(44, 23, 71);
let avgKoalas = averageScore(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    return avgDolphins;
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
    return avgKoalas;
  } else {
    console.log(`We don't have a winner (${avgDolphins} vs. ${avgKoalas})`);
    return -1;
  }
}
console.log(checkWinner(avgDolphins, avgKoalas));

//DATA2
avgDolphins = averageScore(85, 54, 41);
avgKoalas = averageScore(23, 34, 27);

console.log(checkWinner(avgDolphins, avgKoalas));


//------------------------------------------------------------------------------------------------
//ARRAYS
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // Last element of an Array

friends[2] = 'Jay';  // replacing a value inside the Array
console.log(friends); // only primitive values are immutable --> const array can me modified without 'let' declaration since is not a primitive one
// you CAN'T replace the whole array ! ex: friends = ['Bob' , 'Alice'];

const firstName = 'Jonas';
const lastName = 'Schmedtmann'
const birthYearJonas = 1991;
const jonasArray = [firstName, lastName, 2023 - birthYearJonas]; //array construction with defined variables
console.log(jonasArray);

const jonasArray2 = [firstName, lastName, 2023 - birthYearJonas, friends]; //array construction with arrays
console.log(jonasArray2);

//Exercise
const calcAge4 = function (birthYear) {
  return 2023 - birthYear;
}
const yearsArray = [1990, 1967, 2002, 2010, 2018];

const agee1 = calcAge4(yearsArray[0]);
const agee2 = calcAge4(yearsArray[1]);
const agee3 = calcAge4(yearsArray[yearsArray.length - 1]);
console.log(agee1, agee2, agee3);

const agees = [agee1, agee2, agee3];
//const agees = [calcAge4(yearsArray[0]), calcAge4(yearsArray[1]), calcAge4(yearsArray[yearsArray.lenght - 1]);]
console.log(agees);


//------------------------------------------------------------------------------------------------
//ARRAY OPERATIONS - METHODS
//ADD ELEMENTS

//PUSH -> add a new value at the end of the array
const friends2 = ['Michael', 'Steven', 'Peter'];
friends2.push('JAY'); // also push function returns the new length of the array 
console.log(friends2);

console.log(friends2.length); // newLenght = 4
console.log(friends2[friends2.length - 1]); // -> JAY

//UNSHIFT -> add a new value at the begginging of the array
friends2.unshift('Marcel');
console.log(friends2);

//REMOVE ELEMENTS
//POP -> removes the last value of the array
friends2.pop();
console.log(friends2);

const popped = friends2.pop(); // returns the last element of the array
console.log(popped);

//SHIFT -> removes the first value of the array
friends2.shift();
console.log(friends2);

const shifted = friends2.shift();
console.log(shifted); // returns the first element of the array


//indexOf --> returns the index of a specified element
friends2.unshift('Michael');
console.log(friends2);

console.log(friends2.indexOf('Steven'));
console.log(friends2.indexOf('Bob'));

//includes --> returns a boolean state based on the argument
console.log(friends2.includes('Steven'));
console.log(friends2.includes('Bob'));

friends2.push(23);
console.log(friends2);
console.log(friends2.includes('23')); // includes is based on strict equality ===

console.log(friends2);
console.log(friends2.includes(23));

friends2.push('23');
console.log(friends2);
console.log(friends2.includes('23'));

if (friends2.includes('Steven')) {
  console.log('You have a friend called Steven')
}

//Coding challenge 2

/*const bill = prompt('Insert your bill for tip calculation:');
const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
console.log(tip); */

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return 15 / 100 * bill;
  } else {
    return 20 / 100 * bill;
  }
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];;
console.log(`This is the calculated tip: ${tips}`);


const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`This is the initial bill: ${bills}`);
console.log(`This is the total note(bill+tip): ${total}`);

//------------------------------------------------------------------------------------------------
//OBJECTS 
//represents an array with key values and uses {} insead of []
const testArray = [
  firstName,
  lastName,
  birthYearJonas,
  friends             // pos.3 -> array
];

console.log(testArray);
console.log(testArray[3]);

const arrayOutput = [
  testArray[0],
  testArray[1],
  testArray[2],
  testArray[3][0],
  testArray[3][1],
  testArray[3][2]
];
console.log(arrayOutput);


const jonasObject = {
  firstName: 'Jonas',
  lastName: 'Scmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonasObject)

console.log(jonasObject.lastName);
console.log(jonasObject['lastName']);  // more on demand 

console.log(jonasObject['friends']);

const nameKey = 'Name';
console.log(jonasObject['first' + nameKey]);
console.log(jonasObject['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')

//undefined is a falsy value --> if user place a wrong input --> we are validating a boolean if 
if (jonasObject[interestedIn]) {
  console.log(jonasObject[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

//adding a value
jonasObject.location = 'Portugal'
jonasObject['twitter'] = '@jonasschmedtman';
console.log(jonasObject)

//exercise
//ex: Jonas has 3 friends and his best friend is Michael
const exerciseSentence = `${jonasObject.firstName} has ${jonasObject.friends.length} friends and his best friend is ${jonasObject.friends[0]}`
const exerciseSentence2 = `${jonasObject['firstName']} has ${jonasObject['friends'].length} friends and his best friend is ${jonasObject['friends'][0]}`

console.log(exerciseSentence2);


//OBJECTS METHODS

//THIS. method
const jonasThis = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriverLincense: true,

  //calcAge: function () {
  //return 2023 - this.birthYear; } reference directly towards the key const which we wanna use

  //or

  calcAge: function () {
    this.age = 1991 - this.birthYear;
    return this.age;
  }

};

console.log(jonasThis.calcAge()); // first we must call the inside function to activate it
console.log(jonasThis.age); // then we can use it as a property
//or 
//console.log(jonasThis['calcAge']());
//console.log(jonasThis['age']);


// exercise2
// "Jonas is a 46-year old teacher, and he has a/no driver's license."
const jonasObjectExercise = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriverLincense: true,

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  driverLicense: function () {
    if (this.hasDriverLincense) {
      return `a driver's license`;
    } else {
      return `no driver's license :)`;
    }
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.driverLicense()}.`
  }
};

console.log(jonasObjectExercise.getSummary());


//Coding challenge 3
//*TEST DATA1: Mark Miller weight 78kg and 1,69 height;
//              John Smith weight 92kg and 1,95 height
//      BMI formula: mass / height**2; 

const markMiller = {
  firstName: 'Mark',
  lastName: 'Miller',
  weight: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    this.markBMI = this.weight / this.height ** 2;
    const markBMI = this.markBMI = this.bmi;
    return this.bmi, this.markBMI;
  }
};

const johnSmith = {
  firstName: 'John',
  lastName: 'Smith',
  weight: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    this.johnBMI = this.weight / this.height ** 2;
    const johnBMI = this.johnBMI = this.bmi;
    return this.bmi, this.johnBMI;
  }
};

// function method activation for further use
console.log(markMiller.calcBMI());
console.log(johnSmith.calcBMI());

if (markMiller.bmi > johnSmith.bmi) {
  console.log(`${markMiller.firstName} ${markMiller.lastName}'s BMI(${markMiller.bmi} is higher than ${johnSmith.firstName} ${johnSmith.lastName}'s BMI(${johnSmith.bmi}) !`);
} else {
  console.log(`${johnSmith.firstName} ${johnSmith.lastName}'s BMI(${johnSmith.bmi} is higher than ${markMiller.firstName} ${markMiller.lastName}'s BMI(${markMiller.bmi}) !`);
}

//or

const bmiComparsion = function (markBMI, johnBMI) {
  if (markMiller.bmi > johnSmith.bmi) {
    return `${markMiller.firstName} BMI(${markMiller.bmi} is higher than John's BMI(${johnSmith.bmi}) !`
  } else {
    return `${johnSmith.firstName} BMI(${johnSmith.bmi} is higher than Mark's BMI(${markMiller.bmi}) !`
  }
}
console.log(bmiComparsion(markMiller.bmi, johnSmith.bmi));

//or

const bmiComparsion2 = function (markBMI, johnBMI) {
  if (markBMI > johnBMI) {
    return `${markMiller.firstName} BMI(${markMiller.bmi} is higher than John's BMI(${johnSmith.bmi}) !`
  } else {
    return `${johnSmith.firstName} BMI(${johnSmith.bmi} is higher than Mark's BMI(${markMiller.bmi}) !`
  }
}
console.log(bmiComparsion2(markMiller.markBMI, johnSmith.johnBMI));


//------------------------------------------------------------------------------------------------
// FOR LOOP

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// LOOPING ARRAYS
const jonasArray3 = [
  'Jonas',
  'Schmedtmann',
  2023 - birthYearJonas,
  'teacher',
  friends
];
console.log(jonasArray3);

const types = []

for (let i = 0; i < jonasArray3.length; i++) {
  console.log(jonasArray3[i]); //displaying elemets of the array (iterative method using for loop)

  types.push(typeof jonasArray3[i]); // construction of an empty array based on other values

}
console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);


//continue and break
console.log('--- CONTINUE WITH A STRING ---')
for (let i = 0; i < jonasArray3.length; i++) {
  if (typeof jonasArray3[i] !== 'string') continue;
  console.log(jonasArray3[i]);
}

console.log('--- BREAK WITH A NUMBER ---')
for (let i = 0; i < jonasArray3.length; i++) {
  if (typeof jonasArray3[i] === 'number') break;
  console.log(jonasArray3[i]);
}

for (let i = jonasArray3.length - 1; i >= 0; i--) {
  console.log(jonasArray3[i])                        // looping backwards
}

for (let i = 0; i < 3; i++) {
  console.log(`Excercise number ${i}`);

  for (let p = 0; p < 4; p++) {
    console.log(`Repetition number ${p}`);          // loop insinde of a loop
  }
}

//------------------------------------------------------------------------------------------------
// WHILE LOOP

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`Waiting for a 6. Actual dice face number is ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log('You have hit a 6. Congratulations! Loop is about to end.')
  }
}

//Coding challenge 4

const bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips4 = [];
let total4 = []; //bill+tip

const calcTip4 = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return 15 / 100 * bill;
  } else {
    return 20 / 100 * bill;
  }
}

for (let i = 0; i <= bills4.length - 1; i++) {
  const tip = calcTip4(bills4[i]);
  tips4.push(tip);
  total4.push(tip + bills4[i]);
}
console.log(tips4);
console.log(total4);



const calcAverage4 = function (arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i]; // sum += arr[i];
  }

  return sum / arr.length;
}

console.log(calcAverage4(total4));