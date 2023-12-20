"use strict";

// ### Challenge 1:

// **Instructions:**

// Use some of the array methods that we looked at to mutate the following array to = the expected result [6, 5, 4, 3, 2, 1, 0];

const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
const reversArr = arr.reverse();
console.log(arr, reversArr);

// ### Challenge 2:

// **Instructions:**

// Combine `arr1` and `arr2` into a new array called `arr3` with the following elements
//Expected Result: [1,2,3,4,5,6,7,8,9,10]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

//Notice that both `arr1` and `arr2` include the number 5. You will have to find a way to get rid of the extra 5.

console.log(arr1.slice(0, 4));
const arr4 = arr1.slice(0, 4).concat(arr2);
console.log(arr4);

const arr6 = [...arr1, ...arr2];
console.log(arr6);
arr6.splice(4, 1);
console.log(arr6);
