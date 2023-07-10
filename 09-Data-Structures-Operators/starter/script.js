'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
  const teamStr = team === 'x' ? 'draw' : `victory ${game1[team]}`;
  console.log(team, odd);
  console.log(`Odd of ${teamStr}: ${odd}`);
}

console.log('SETS------------------------------------------------------');
//SETS
