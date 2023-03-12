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
