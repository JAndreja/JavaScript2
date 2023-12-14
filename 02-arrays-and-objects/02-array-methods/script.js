"use strict";

let x;
const array = [12, 30, 25, 45, 78];

// array.push("Andreja");
// array.pop();
// array.unshift("Andreja");
// array.shift();
// array.reverse();

x = array.includes(45);
x = array.indexOf(30);
let sliceArr = array.slice(1, 4);
let spliceArr = array.splice(1, 4);

// console.log(array);
// console.log(x, array);

console.log(sliceArr, array);
console.log(spliceArr, array);
