 "use strict";
const firstName = "Andreja";
const lastName = "Jovanovski";
const age = 47;

// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

// we can define like this

// const person = {
//     firstName,
//     lastName,
//     age,
//   };

//  console.log(person);
//  console.log(person.age);

// destructuring object

// const todo = {
//   id: 1,
//   title: "Take out trash",
//   user: {
//     userName: "Kaja",
//   },
// };

//   const { id:todoID, title } = todo;
//   console.log(todoID, title);
// const {
//   user: { userName },
// } = todo;
// console.log(userName);

// destructuring array

 const numbers = [2, 3, 5, 67, 82, 120];

  // const [a, b, c] = numbers;
  // console.log(a, b, c);

//skip one value
const [e, g, , l] = numbers;
console.log(e, g, l);

// rest operator

const [one, two, ...nums] = numbers; //  here we take the rest of the numbers as array
console.log(one, two, nums);
 console.log(one, two, ...nums); // here we spread as one array
