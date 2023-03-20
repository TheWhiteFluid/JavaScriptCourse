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
// DESTRUCTURING ARRAYS  --> [ ] destructuring arrays sing :)
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

const [aa, bb, ...others] = [1, 2, 3, 4, 5];
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

const xx = [23, 7, 5];
add(...xx); // spread ca sa impart elemenele din array ---> mai apoi se vor forma inapoi un array prin operatorul rest care este inclus in functie

//-------------------------------------------------------------------------------------------------
//SHORT CIRCUITING OPERATORS [ ||(or) &&(and) ]

// || OR operator
const guest = restaurant.numGuest || 10; // because that restaurant property is not defined(value undefind falsy) --> OR operator will short circuiting and return first truthy value 10

// && AND operator
const guest2 = restaurant.numGuest || 10; // because that restaurant property is not defined(value undefind falsy) --> AND operator will short circuiting and return first falsy value 10

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
