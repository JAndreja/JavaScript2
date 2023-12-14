"use strict";

const person = {
  name: "Andreja",
  age: 30,
  address: {
    street: "Njegosheva",
    number: "16 A",
    location: "Skopje",
  },
  hobbies: ["walking", "running", "cycling"],
};

console.log(person);
console.log(person.name); // dot notation
console.log(person["age"]); // bracket notation
console.log(person.address.location);
console.log(person.address["number"]);
console.log(person.hobbies);
console.log(person["hobbies"][2]);

// add properties
person.surname = "Jovanvski";
console.log(person);

//add function

person.greet = function () {
  console.log(`Hello ${this.name} ${this.surname}`);
};

person.greet();
