"use strict";

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];

//fruits.push(berries);

//console.log(fruits);

//let x = console.log(fruits[3][1]);

const allFruits = [fruits, berries];
console.log(allFruits);
console.log(allFruits[1][2]);

let y = fruits.concat(berries);
console.log(y);

// spred operator (...)

let z = [...fruits, ...berries];
console.log(z);
let j = [...fruits, berries];
console.log(j);
