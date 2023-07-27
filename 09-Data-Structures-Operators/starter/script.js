'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /*
  orderDelivery: function(obj){
    console.log(obj);
  } , */

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time}`
    );
  },

  recipe: function (ingr1, ingr2, ingr3) {
    console.log(
      `Here is your delicious pasta with the ingredients: ${ingr1}, ${ingr2},${ingr3}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//calling object function
restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 2,
  time: '22:30',
  address: 'Via del Sole, 21',
});

// -------------------------------------------------------------------------------------------------
// DESTRUCTURING ARRAYS  --> [ ] destructuring arrays sign :)
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// const [a, b , c] = arr

const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

//Switching variables
let [main, secondary] = restaurant.mainMenu;
console.log('Before switch:', main, secondary);

[main, secondary] = [secondary, main];
console.log('After switch:', main, secondary);

// saving elements into variables trick
console.log(restaurant.order(2, 0));
const [starterMenuOrder, mainMenuOrder] = restaurant.order(2, 0);
console.log(starterMenuOrder, mainMenuOrder);

//Destructuring nested arrays(arrays in arrays)
const nested = [2, 5, [8, 9]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const defaultArr = [7, 8, 9];
const [p, l, m = 1] = [7, 8];
console.log(p, l, m);

//---------------------------------------------------------------------------------------------
//DESTRUCTURING OBJECTS --> { } destructuring objects sign
// You have to specify in the {} the exact name of object properties that you wanna destruct

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// changing names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//default values (default values are helpful when, in the real world, we recevide vast amount of data that we didn't code --> ex: API forecast, etc...)
const { propertyThatNotExist = [], starterMenu: starts = [] } = restaurant;
console.log(propertyThatNotExist, starts);

//nested objects(objects inside of an object)
const { fri } = openingHours;
console.log(fri);
const {
  fri: { openHrs, closeHrs },
} = openingHours;
console.log(openHrs, closeHrs);

// same thing but taked close by close :)
//let { sat } = restaurant.openingHours;
//console.log(sat);
//const { open, close } = sat;
//console.log(open, close);

//-----------------------------------------------------------------------------------------------
//SPREAD OPERATOR ...

const arrSpread = [1, 2, 3, 4];
console.log(arrSpread);

const newArr = [...arrSpread, 5, 6];
console.log(newArr);

const newMainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMainMenu);

// Copy arrays
const arrCopy = [...arrSpread];
console.log(arrCopy);

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Joining 2 or more arrays
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

// ITERABLES: arrays, strings, maps, sets.  NOT  objects
const str = 'Jonas';
const letters = [...str];
console.log(letters);
// we can use spread operator for building arrays / passing values into a function

//Real-word example

// const ingredients = [
//   prompt('Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// restaurant.recipe(...ingredients);

//Objects
const newRestaurant = { ...restaurant };
console.log(newRestaurant);

const newRestaurantAdd = {
  ...restaurant,
  foundedIN: 19998,
  fondator: 'Giuseppe',
};
console.log(newRestaurantAdd);

//---------------------------------------------------------------------------------------------
//REST OPERATOR (same as spread but this time will collect arguments into array/object)

const arrSpreadd = [1, , 2, ...[3, 4]]; // SPREAD because on the RIGHT side of =

const [aa, bb, ...others] = [1, 2, 3, 4, 5]; //REST because on the LEFT side of =
console.log(aa, bb, others);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  // aduna argumentele si formeaza un array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);

add(2, 6, 7, 8);

const xx = [23, 7, 5, 4]; //line 196
add(...xx); // spread ca sa despart elemenele din array ---> mai apoi se va forma suma prin intermediul functiei ce foloseste metoda rest (adunarea elementelor individuale)

//-------------------------------------------------------------------------------------------------
//SHORT CIRCUITING OPERATORS [ ||(or) &&(and) ]

// || OR operator
const guest = restaurant.numGuest || 10; // because that restaurant property is not defined(value undefind falsy) --> OR operator will short circuiting and return first truthy value

// && AND operator
const guest2 = restaurant.numGuest && 10; // because that restaurant property is not defined(value undefind falsy) --> AND operator will short circuiting and return first falsy value

//Practical example
if (restaurant.recipe) {
  restaurant.recipe('mushrooms', 'spinach'); // old way of doing it
}

restaurant.recipe && 'nothing to display here'; // searching for property and if .recipe not exists(undefined falsy value) --> will move on and will return the second part if is a truthy value

restaurant.recipe && restaurant.recipe('mushrooms', 'spinach'); // searching for property and if .recipe exists(truthy value) --> will move on and will actually call the function in the second part

// Nullish: null and undefined
restaurant.numGuest = 10;
const guestCorrect = restaurant.numGuest ?? 10;

console.log(guestCorrect);

//--------------------------------------------------------------------------------------------------
// LOGICAL ASSIGNMENT OPERATORS

const rest1 = {
  name: 'Capri',
  numGuest: 20,
  //numGuest: 0
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR ASSIGNMENT OPERATOR
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10; -->same thing but written using a logical assignment operator
// rest2.numGuest ||= 10;

// writting using the nullish logical assignment operator(in case of 0 which is theoretically a nullish value --> this value will not be dismissed in this case :p )
rest1.numGuest ??= 10; // if .numGuest is not found then ---> 10
rest2.numGuest ??= 10;

// AND ASSIGNMENT OPERATOR
//rest1.owner = rest1.owner && 'ANONYMOUS'
//rest2.owner = rest2.owner && 'ANONUMOUS'

rest1.owner &&= 'ANONYMOUS'; // if .owner is not found ---> undefined value returned
rest2.owner &&= 'ANONYMOUS'; // if .owner is found -------> will be replaced with 'ANONYMOUS'

console.log(rest1);
console.log(rest2);

//-------------------------coding challenge1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;

//2.
const [gk, ...fieldPlayers] = players1; // rest parametor to collect all the remaining players except first one which will be assumed by gk variable

//3.
const allPlayers = [...players1, ...players2]; // spread operator to concatenate a big array formed by players1&players2 small arrays

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5.
//const { odds } = game;
//const { team1, x, team2 } = odds;

//const {odds: { team1, x: draw, team2 },} = game;

const { team1, x: draw, team2 } = game.odds; //deconstracturing an object inside of an other object

//6.

const printGoals = function (...players) {
  //rest to form an array despite of the number of the arguments
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
printGoals('Lewandowski', 'Gnarby');

printGoals(...game.scored); // spread to spread players from scored array

//7.
team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team2 is more likely to win');

//&&- AND operator because if the condition is satisfied will continue to display cl funtion (will return first falsy value --> cl)
// ||- OR operator will return first true value so that means team1<team2 satisfied --> will no go further to return cl

//--------------------------------------------------------------------------------------------------
// LOOPING ARRAYS: The for-of Loop

// OBJECT KEYS, VALUES AND ENTRIES

//PROPERTY NAMES(KEYS)
const propertiesKeys = Object.keys(openingHours);
console.log(propertiesKeys); // array

let openStr = `We are open for ${propertiesKeys.length} days as follow: `;
for (const day of propertiesKeys) {
  openStr += `${day},`;
}
console.log(openStr);

//PROPERTY VALUES
const propertiesValues = Object.values(openingHours); // array of objects
console.log(propertiesValues);
for (const x of propertiesValues) {
  console.log(x);
}

// Entire object using ENTRIES
const entries = Object.entries(openingHours); // all the entries of the object in a big array of arrays
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//-------------------------coding challenge2

const game1 = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log('1---------------------------------------------------------');
//1.
const scoredArrayEntries = game1.scored.entries(); // entries of the array
const oddsObjectEntries = Object.entries(game1.odds); // entries of the object

for (const [i, player] of game1.scored.entries()) {
  console.log(`Goal ${i}: ${player}`);
}

console.log('2---------------------------------------------------------');
//2.
const oddsValues = Object.values(game1.odds);
console.log(oddsValues);

let average = 0;
for (const odd of oddsValues) {
  average += odd;
}
average /= oddsValues.length;
console.log(average);

console.log('3---------------------------------------------------------');
//3.
const test11 = Object.entries(game1.odds);
console.log(test11);

for (const [team, odd] of Object.entries(game1.odds)) {
  console.log(team, odd);
  if (team === 'x') {
    console.log(`Odd of draw: (${odd})`);
  } else {
    console.log(`Odd of victory for ${game1[team]}: ${odd}`);
  }
}

//SETS
console.log('SETS...................................................');

const alphabet = new Set(['a', 'b', 'b', 'c', 'd', 'd', 'd', 'e']);
console.log(alphabet);

console.log(alphabet.size);

alphabet.add('x');
console.log(alphabet);

alphabet.delete('x'); //alphabet.clear( )
console.log(alphabet);

console.log(alphabet.has('a'));
console.log(alphabet.has('y'));

for (const letter of alphabet) {
  console.log(letter);
}

const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Chef'];
console.log(staff);

const staffUniqueSet = new Set(staff);
console.log(staffUniqueSet);

const staffUniqueSetArray = [...new Set(staff)]; // [...staffUniqueSet]
console.log(staffUniqueSetArray);

console.log(
  new Set(['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Chef']).size
); // console.log(staffUniqueSet.size);

const lettersOfName = new Set('WOLF');
console.log(lettersOfName);
console.log(lettersOfName.size);

//MAPS
console.log('MAPS1...........................................................');

const rest = new Map();
rest.set('name', 'Classico Italiano'); // maps has also the capability to return own values fact that will help us to chain multiple maps

rest.set(1, 'Firenze');
console.log(rest.set(2, 'Lisbon Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get('open'));

const time = 21;
console.log(rest.get(rest.get('closed') > time && rest.get('open') < time));

console.log(rest.has('categories'));

console.log(rest.size);
rest.delete(2);
console.log(rest);

console.log(rest.size);

const arrr = [1, 2];
rest.set(arrr, 'Test');
console.log(rest);

console.log(rest.get(arrr));

console.log('MAPS2: ITTERATION...............................................');

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try again!'],
]);
console.log(question);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt('What is your answer'));
const answer = 3;

if (answer == question.get('correct')) {
  console.log(`Your answer is: ${question.get(true)}`);
} else {
  console.log(`Your answer is false. ${question.get(false)}`);
}

console.log(question.get(answer == question.get('correct')));
//console.log(question.get(true/false));

//Convert map into array
console.log(question);
console.log(...question);

//maps have almost same methods as array except set/get
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

//Coding challange 3
console.log('CODING CHALLANGE3........................................');

const gameEvent = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow Card'],
]);

//1.
console.log('1...............');

const gameEventValues = gameEvent.values();

const uniqueEvents = new Set(gameEventValues);
console.log(uniqueEvents);

const uniqueEventArray = [...uniqueEvents];
console.log(uniqueEventArray);

//2.
console.log('2...............');

gameEvent.delete(69);
console.log(gameEvent);

//3.
console.log('3...............');
//const printStr = 'An event happened, on average, on 9 minutes'; // game last 90 min

const numberOfEvents = gameEvent.size;
console.log(numberOfEvents); //10

const lastEventTime = [...gameEvent.keys()].pop();
console.log(lastEventTime);

console.log(
  `An event happened, on average, on ${lastEventTime / numberOfEvents} minutes`
);

//4.
console.log('4...............');

for (const [time, event] of gameEvent) {
  const half = time <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF]: ${time}: ${event}`);
}

//WORKING WITH STRINGS
console.log('WORKING WITH STRINGS..........................................');
//STRINGS1
console.log('Strings1.................................................');

const airline = 'TAP air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('B737'[0]);
console.log('B737'[1]);
console.log('B737'[2]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

//string methods - slice

console.log(airline.slice(1));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(0, airline.lastIndexOf(' ')));

console.log(airline.slice(-2)); // last 2 letters
console.log(airline.slice(0, -2)); // beggining till last 2 letters

const checkMiddleSeat = function (seat) {
  // B & E are middle seats
  const seatSlice = seat.slice(-1);
  console.log(seatSlice);

  if (seatSlice >= 'B' && seatSlice <= 'E') {
    console.log('Middle seats');
  } else {
    console.log('Margin seats');
  }
};

checkMiddleSeat('11A');
checkMiddleSeat('11B');
checkMiddleSeat('11C');
checkMiddleSeat('11D');
checkMiddleSeat('11E');
checkMiddleSeat('11F');

//STRINGS2
console.log('Strings2.................................................');

//capitalization
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passanger = 'jOnAS';
const passangerLowerCase = passanger.toLowerCase();
const passangerCorrect =
  passangerLowerCase[0].toUpperCase() + passangerLowerCase.slice(1);

console.log(passangerCorrect);

//comparing emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';

const emailCompare = function (emailAdress) {
  //const lowerEmail = emailAdress.toLowerCase()
  //const trimmedEmail = emailAdress.trim()
  const emailNormalized = emailAdress.toLowerCase().trim();
  if (emailAdress === emailNormalized) {
    console.log('Correct email');
  } else {
    console.log('Invalid email');
  }
};
emailCompare('hello@jonas.io');
emailCompare('Hello@Jonas.Io');

//replacing
const priceGB = '2188,97#';
console.log(priceGB);

const priceDollar = priceGB.replace('#', '$');
console.log(priceDollar);

const priceDollarCorrect = priceGB.replace('#', '$').replace(',', '.');
console.log(priceDollarCorrect);

const announcement =
  ' All passangers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replaceAll(/door/g, 'gate')); // same thing using global replacement

//booleans
const plane2 = 'A320neo';
console.log(plane2.includes('A320'));

console.log(plane2.startsWith('A320'));

if (plane2.startsWith('A') && plane2.endsWith('neo')) {
  console.log('This plane is from Airbus neo family');
} else {
  console.log('Not from Airbus family :(');
}

//STRINGS3
console.log('Strings3.................................................');

//split & join
console.log('a+very+nice+string');
console.log('a+very+nice+string'.split('+')); //SPLIT WILL ALSO TRANSFORM STRING INTO ARRAY SPLITTED BY THE DEFINIED CHARACTER/SYMBOL !!!

console.log('Jonas Schemdtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schemdtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const passanger2 = 'jessica ann smith davis';
const passanger3 = 'alma carmela diane';

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  console.log(names);

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper);
  console.log(namesUpper.join(' '));
};

capitalizeName(passanger2);
capitalizeName(passanger3);

// padding a string
const message = 'Go to gate 23!';

console.log(message.padStart(25, '+')); // will make a string to have desired length
console.log(message.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (digits) {
  const nmbToStr = digits + ''; // number + str --> convert primitives to string
  const lastDigits = nmbToStr.slice(-4);
  console.log("Your's masked credit card number:");

  const mask = lastDigits.padStart(nmbToStr.length, '*');
  return mask;
};

console.log(maskCreditCard(212414214));
console.log(maskCreditCard('1231543637'));

//repeat
const message2 = 'Bad weather.. All departues delayed...';
console.log(message2.repeat(4));

const planesInLine = function (n) {
  const str = `There are ${n} planes in line ${' plane'.repeat(n)}`;
  console.log(str);
};
planesInLine(2);
planesInLine(3);
planesInLine(4);

//Coding challange 4
console.log('CODING CHALLANGE4........................................');

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

//TEST DATA
/* 
underscore_case
  first_name
Some_Variable
  calculate_AGE
delayed_departure
*/

//TASK: convert variable written in underscore_case to camelCase

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLocaleLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    //console.log(output);

    const outputPadded = output.padEnd(20);
    const outputPaddedEmojiRepeat = `${outputPadded}${':)'.repeat(i + 1)}`;
    console.log(outputPaddedEmojiRepeat);
  }
});

//trim() get rid of empty space or a symbol
//split(x) will using the specified symbol/charachter to split input into a array
//join() will make element to join together with a given element/symbol
//slice(x) will slice input given the index(begging/end)
//replace(a,b) will replace element a from an element with element b
//tolowercase().....
//touppercase().....
//element.repeat(x) will repeat element for x times
//paddEnd(x) will give specified padding at the end of the input
//paddStart(x) will give specified padding at the beggining of the input

//STRING METHODS PRACTICE
console.log('STRING METHODS PRACTICE..................................,');

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  
  const output = `${0}`
