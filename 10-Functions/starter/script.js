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
