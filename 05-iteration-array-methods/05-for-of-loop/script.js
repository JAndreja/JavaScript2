"use strict";

//for/of - loops through the values of an iterable object

// Loop through arrays
const items = ["book", "table", "chair", "kite"];

for (const item of items) {
  console.log(item);
}

const users = [
  { name: "Andreja", age: 47 },
  { name: "Radica", age: 42 },
  { name: "Kaja", age: 12 },
];

for (const user of users) {
  console.log(user.name);
}

// Loop over strings

const name = "Andreja";

for (const s of name) {
  console.log(s);
}

// Loop over Maps

// Loop over Maps
const map = new Map();
map.set("name", "John");
map.set("age", 30);

for (const [key, value] of map) {
  console.log(key, value);
}
