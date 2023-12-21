"use strict";

const user = "Radica";

function greetUser(user) {
  console.log(`Hello ${user}`);
}

greetUser("Andreja");
greetUser(user);

// Default params
function greetUser1(user = "Bot") {
  console.log(`Hello ${user}`);
}

greetUser1("Kaja");
greetUser1();

// rest params

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Object as params

function loginUser(user) {
  return ` The user ${user.name} with the id of ${user.id} is logged in`;
}

const user1 = {
  id: 1,
  name: "Andreja",
};

console.log(loginUser(user1));
console.log(
  loginUser({
    id: 2,
    name: "Radica",
  })
);

// Arrays as params

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
