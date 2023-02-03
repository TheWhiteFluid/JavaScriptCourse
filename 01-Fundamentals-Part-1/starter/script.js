40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

const simpleMath = (40 + 8 + 23 - 10);
console.log("Simple math:" + ' ' + simpleMath);
//or
console.log(`Simple math is ${simpleMath}`);

//------------------------------------------------------------------------------------------------
//VARIABLES DECLARATION
let firstName = 'Matilda';
let $number = 4;

console.log(firstName);
console.log($number);

let myFirstJob = "Asshole";
let myCurrentJob = "Programmer";

console.log(myFirstJob);
console.log(myCurrentJob);

let age = 30;
age = 31 // declararea unei variabile ce poate fi comutata mai tarziu

const birthYear = 1999; // declararea unei variabile ce este constanta pe tot parcursul codului

console.log(age);
console.log(birthYear);

//Coding challenge 2
//fromula BMI = mass/height **2
const weightMark = 78;
const heightMark = 1.69;
const BMIMARK = weightMark / heightMark ** 2;

const weightJohn = 92;
const heightJohn = 1.95;
const BMIJohn = weightJohn / heightJohn ** 2;

console.log("Mark BMI is:" + ' ' + BMIMARK);
console.log("John BMI is:" + ' ' + BMIJohn);

const markHigherBmi = Boolean(BMIMARK > BMIJohn);
console.log("Mark is higher than John:" + ' ' + markHigherBmi);
//or
console.log(`Mark is higher than John ${markHigherBmi}`)

//------------------------------------------------------------------------------------------------
// IF STATEMENT
const age2 = 16;
const yearsLeft = 18 - age2;

if (age2 >= 18) {
  console.log('Congratulations! You have the permision for a driver license!');
} else {
  console.log(`I am sorry! You have to wait another ${yearsLeft} years`); // const yearLeft se putea definii local si in interiorul conditiei else
}

const birthYear2 = 2012;
let century;

if (birthYear2 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

if (BMIMARK > BMIJohn) {
  console.log(`Mark's BMI(${BMIMARK}) is higher than John's(${BMIJohn})`);
} else {
  console.log(`John's BMI(${BMIJohn}) is higher than Mark's (${BMIMARK})`)
}

//------------------------------------------------------------------------------------------------
//type conversion (done manually by you)
const inputYear = '2012'; // number as a string
console.log(inputYear);
console.log(inputYear + 8); // concatenate two strings (will not compute the calculation)
console.log(Number(inputYear) + 8); // conversion string --> number (calculus will be executed)
console.log(typeof (inputYear));

const inputName = 'Jonas';
console.log(inputName);
console.log(Number(inputName));
console.log(typeof (inputName));

const inputNumber = 23;
console.log(inputNumber);
console.log(String(inputNumber));
console.log(typeof (inputNumber));

//------------------------------------------------------------------------------------------------
//type coercion (JS will automatically do the conversion for values to match)
console.log('I am ' + 24 + ' years old');
console.log('I am ' + String(24) + ' years old'); //same
console.log('I am ' + '24' + ' years old'); //same

console.log('23' - '10' - 3); // - will trigger ceorcion between strings and numbers --> number
console.log('23' + '10' + 3);  // + will trigger concatenation between strings and numbers --> string

//------------------------------------------------------------------------------------------------
// 5 falsy values: 0 / '' / undefined / null / NaN
const money = 0
if (money) {
  console.log("Don't spend it all (balance is 0 --> falsy value)");
} else {
  console.log("You should get a job!");
}

const money2 = 999
if (money2) {
  console.log("Don't spend it all (balance is 0 --> falsy value)");
} else {
  console.log("You should get a job!");
}


let height;
if (height) {
  console.log("Height is now defined :)");
} else {
  console.log("Height is UNDEFINED!");
}

let height2 = 9999;
if (height2) {
  console.log("Height2 is now defined :)");
} else {
  console.log("Height2 is UNDEFINED!");
}

//------------------------------------------------------------------------------------------------
//Equality operators ( === strict(mainly used) / == unstrict due coercion ) 
//                   (!== strict not equal / != unstrict not equal)
18 === 18 // true
'18' === 18 // false

18 == 18 // true
'18' == 18 // true

/* const favourite = prompt("What's your favourite number?");
console.log(favourite);          //the output will be recorded as a string no matter what
console.log(typeof (favourite));

if (favourite === 23) {
  console.log("Cool this is an amazing number");
} else {
  console.log("Please make sure that the output is an actual number / value is matching");
}

const favourite2 = Number(prompt("What's your favourite number?"));
console.log(favourite2);          //the output will be recorded as a string no matter what
console.log(typeof (favourite2));

if (favourite2 === 23) {
  console.log("Cool this is an amazing number and the equality is now satisfied");
} else {
  console.log("Please make sure that the value is matching");
} */


//------------------------------------------------------------------------------------------------
//Logical Operators ( AND && / OR || / NOT !)
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

// true AND true = true / true AND false = false / false AND false = false
// true OR true = true / true OR false = true / false OR false = false

console.log(hasDriversLicense && hasGoodVision); //AND
console.log(hasDriversLicense || hasGoodVision); //OR
console.log(!hasGoodVision);                     //NOT

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive")
} else {
  console.log("Someone else should drive!")
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive")
} else {
  console.log("Someone else should drive!")
}

//Coding challenge 2
/*TEST DATA1: Dolphins score 96, 108 and 89
              Koalas score 88, 91 and 110 */

const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
console.log(dolphinsAverage);

const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(koalasAverage);

if (dolphinsAverage > koalasAverage) {
  console.log("Dolphins won the game!")
} else if (dolphinsAverage === koalasAverage) {
  console.log("It is a draw.")
} else {
  console.log("Koalas won the game!")
}

const dolphinsScore11 = 97;
const dolphinsScore22 = 112;
const dolphinsScore33 = 101;

const koalasScore11 = 109;
const koalasScore22 = 95;
const koalasScore33 = 123;

const dolphinsAverage2 = (dolphinsScore11 + dolphinsScore22 + dolphinsScore33) / 3;
console.log(dolphinsAverage2);

const koalasAverage2 = (koalasScore11 + koalasScore22 + koalasScore33) / 3;
console.log(koalasAverage2);

const minumumScore = 100;
if ((dolphinsAverage2 > koalasAverage2) && (dolphinsAverage2 >= minumumScore)) {
  console.log("Dolphins won the game!")
} else if ((dolphinsAverage2 === koalasAverage2) && (dolphinsAverage2 >= minumumScore) && (koalasAverage2 >= minumumScore)) {
  console.log("It is a draw.")
} else if ((koalasAverage2 > dolphinsAverage2) && (koalasAverage2 >= minumumScore)) {
  console.log("Koalas won the game!")
} else {
  console.log("Neither of the teams has won")
}

//------------------------------------------------------------------------------------------------
// SWITCH 
const day = prompt("Choose one day from your calendar:");
console.log(day);

switch (day) {
  case 'monday':
    console.log("Monday stuff to do")
    break;
  case 'wednesday':
  case 'thursday':
    console.log("Wednesday & Thursday stuff to do")
    break;
  case 'friday':
    console.log("Friday stuff to do")
    break;
  case 'saturday':
  case 'sunday':
    console.log("Saturday & Sunday stuff to do")
    break;
  default:
    console.log("Please select a week day!");
}

if (day === 'monday') {
  console.log("Monday stuff to do")
} else if (day === 'wednesday' || day === 'thursday') {
  console.log("Wednesday & Thursday stuff to do");
} else if (day === 'friday') {
  console.log("Friday stuff to do");
} else if (day === 'saturday' || day === 'sunday') {
  console.log("Saturday & Sunday stuff to do");
} else {
  console.log("Please select a week day!");
}

//------------------------------------------------------------------------------------------------
//STATEMENTS AND EXPRESSIONS
const ageAlcohol = 23;

const drink = ageAlcohol >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (ageAlcohol >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I'd like to drink ${ageAlcohol >= 18 ? 'wine' : 'water'} please!`);

const bill = prompt('Insert your bill for tip calculation:');
const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
console.log(tip);

console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${Number(bill) + tip}`);

// DONE! SECTION CLOSED
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------