// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

if (x === 23) console.log(23);

console.log('saionara');

console.log('live server enabled using node.js');

//PROBLEM
const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [2, 9, 3];

const calcAmplitute = function (arr1, arr2) {
  //array concat
  const arr = arr1.concat(arr2);
  console.log(arr);

  //calculus of the min and max value of the array
  let maxValue = arr[0];
  let minValue = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (typeof arr[i] !== 'number') continue; // handling(ingnore) the error

    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
    if (minValue > arr[i]) {
      minValue = arr[i];
    }
  }
  console.log(maxValue, minValue);

  //calculus of the AMPLITUDE formula
  return maxValue - minValue;
};

console.log(calcAmplitute(temperatures1, temperatures2));
