"use strict";
const firstName = "Andreja";
const lastName = "Jovanovski";
const age = 47;

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

// we can define like this

// const person = {
//     firstName,
//     lastName,
//     age,
//   };

console.log(person);
console.log(person.age);

// destructuring

const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "Andreja",
  },
};

const { id, title } = todo;
console.log(id, title);
const {
  user: { name },
} = todo;
console.log(name);
