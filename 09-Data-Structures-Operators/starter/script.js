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

restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 2,
  time: '22:30',
  address: 'Via del Sole, 21',
});

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

//-----------------------------------------------------------------
//DESTRUCTURING OBJECTS --> { } destructuring objects sing :)
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
const { sat } = restaurant.openingHours;
console.log(sat);
const { open, close } = sat;
console.log(open, close);
