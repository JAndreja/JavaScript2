"use strict";

// ## Challenge 1

// **Instructions:**

// Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

// For bonus points, write it as a one line arrow function

function getCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

const getCelsius1 = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celsius);
};

console.log(`The temperature is ${getCelsius(32)} \xB0C`);
console.log(`The temperature is ${getCelsius1(50)} \xB0C`);

// ## Challenge 2

// **Instructions:**

// Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { min, max };
}
console.log(minMax([1, 2, 3, 4, 5]));

// ## Challenge 3

// Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.
// **Hints:*

// 1.  The area of a rectangle is `length * width`. These should get passed into the IIFE as arguments.
// 2.  You do not have to return anything from this function, just log to the console.

((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(10, 5);
