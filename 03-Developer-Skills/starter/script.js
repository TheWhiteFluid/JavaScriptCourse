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

//----------------------------------------------------------------------------
//DEBUGGING

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'Celsius',
    //C) FIX
    //value: prompt('Degrees to celsius: '),
    value: Number(prompt('Degrees to celsius')), //converting string value --> number
  };
  // B)FIND
  console.table(measurement); //finding the actual output object values type
  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin()); //not adding properly (concatenate than add)

//Coding challenge #1

const testdata1 = [17, 21, 23];

const printForecast = function (arr) {
  let forecastStr = ` `;
  for (let i = 0; i <= arr.length - 1; i++) {
    forecastStr = forecastStr + `...${arr[i]}C in ${i + 1} days`;
  }
  console.log(forecastStr);
};

printForecast(testdata1);
