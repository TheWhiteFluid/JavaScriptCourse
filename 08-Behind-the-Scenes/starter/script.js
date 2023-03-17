'use strict';

const firstName = 'Rares';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} this is your age ${age}, born in year ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating a NEW variable with same name as outer scope's variable
      const firstName = 'Marin';
      const output2 = `Hi ${firstName}, you are a millenial`;
      console.log(output2);

      var millenial = true;

      // Reasining outer scope's variable
      output = 'NEW OUTPUT';

      function add(a, b) {
        return a + b;
      }

      const sum = add(2, 3);
      console.log(sum);
    }
    console.log(millenial); // work because of var
    console.log(output); // most recent scope variable declaration(reassining)
    //console.log(add(2,3)) -> doesn t work because function must be called in the outer scope first
  }

  printAge();
  return age;
}

calcAge(1994);

//-----------------------------------------------------------------------------
//THIS keyword
console.log(this);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year); // this -> object that calls the method // this === jonas(object)
  },
};

jonas.calcAge();

const matilda = {
  year: 1999,
};

matilda.calcAge = jonas.calcAge; // passing method between objects
matilda.calcAge(); // now this keyword is refferin to the object that was passed to // this === matilda(object)

const jonas2 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // isMillenial = function () {
    //  console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    //  };  undefined error(because this keyword for a normal function that is inside of other method(parent function) is not poiting to the main object itself) -- 2 solutions

    // solution 1 (assinging this keyword to a variable - self/that)
    let self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    // soultion 2 (using an arrow function)
    const isMillenial2 = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }; // this keyword in an arrow function will look for this in the outerscope --> main object itself

    isMillenial();
    isMillenial2();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // 'Hey undefined' because arrow function don t have its own this keyword --> will look at the outerscope (in this case is represented by the global scope) where this is pointing to 'window'
  },

  greet2: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // normal functions have its own this keyword --> this is pointing to jonas 2 object
  },
};

jonas2.greet();
jonas2.greet2();

jonas2.calcAge();

//--------------------------------------------------------------------
// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 10);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

//addArrow(2, 5, 8, 10);

//-----------------------------------------------------------------------
// Primitives vs Objects

//Primitive values are stored in the CALL STACK:
// primitives using const declaration are immutable
// primitives using let declaration are NOI immutable as we can see below:
let age = 30;
let oldAge = age;

age = 31;
console.log(age); //30
console.log(oldAge); //31

// Identifier  Adress  Value
/* age ------> 0001    30
   oldAge ---> 0001    30
   new age --> 0002    31   */
// CALL STACK

// Objects(reference values) are stored in the HEAP:
// even if we use const in object declaration, they are not immutable as we can see below(are stored in the heap adress where the call stack value is pointing to)
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(friend); // {'Jonas', 27}
console.log(me); //{'Jonas', 27}

// Identifier  Adress  Value      Adress       Value
/* me -------> 0003    D30F  -->  D30F   {name:'Jonas', age: 30}
   friend ---> 0003    D30F  -->  D30F   {name:'Jonas', age: 30}
   friend.age -> 0003  D30F  -->  D30F   {name:'Jonas', age: 27} */
// CALL STACK                           // HEAP

let lastName = 'Williams';
let oldLastName = lastName;

lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//COPYING OBJECTS
//to copy a new object is better to create another one (another refference)
// one method is Object.assign (working on the first level)
// for a deep cloning ( also cloning the arrays/objects inside of the object we need to usa a library :) )

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary', 'John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
