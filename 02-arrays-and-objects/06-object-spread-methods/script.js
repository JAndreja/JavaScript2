"use strict";

const todo = {};
todo.id = 1;
console.log(todo);

const todo2 = new Object();
todo2.name = "Andreja";
todo2.age = 23;
console.log(todo2);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 };
console.log(obj3);

// spread operator
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

const obj5 = { ...obj1, obj2 };
console.log(obj5);

// method

const obj6 = Object.assign({}, obj1, obj2);
console.log(obj6);

// array of objects

const todo3 = [
  { id: 1, name: "Buy milk" },
  { id: 2, name: "Take out trash" },
  { id: 3, name: "Pickup kids from school" },
];

console.log(todo3);
console.log(todo3[0]);
console.log(todo3[1].id);
console.log(todo3[2].name);

const keys = Object.keys(todo2);
console.log(keys);
console.log(keys.length);

const values = Object.values(todo2);
console.log(values);
