"use strict";
const d = new Date(2022, 1, 10, 19, 0, 0);
const hour = d.getHours();

console.log(hour);

if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 18) {
  console.log("Godd Afternoon");
} else {
  console.log("Good Night");
}

// nested if

if (hour < 12) {
  console.log("Good Morning");
  if (hour == 6) {
    console.log("Wake Up!");
  }
} else if (hour < 18) {
  console.log("Godd Afternoon");
} else {
  console.log("Good Night");
  if (hour >= 22) {
    console.log("zzzzzzzzzzzzz........");
  }
}

if (hour >= 7 && hour < 15) {
  console.log("It is work time!");
}

if (hour === 6 || hour === 20) {
  console.log("Brush your teeth!");
}
