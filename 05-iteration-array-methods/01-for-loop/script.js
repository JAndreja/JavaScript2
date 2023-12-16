"use strict";

// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let i = 0; i <= 10; i++) {
//   console.log(`Number ${i}`);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     console.log(`5 is my lucky number`);
//   } else {
//     console.log(`Number ${i}`);
//   }
// }

// nested loops

// for (let i = 1; i <= 10; i++) {
//   console.log(`Number ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i}*${j} = ${i * j}`);
//   }
// }

// Loop throuhg an array

const names = ["Andreja", "Radica", "Kaja", "Maza"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Kaja") {
    console.log(`${names[i]} is my dayther`);
  } else {
    console.log(names[i]);
  }
}
