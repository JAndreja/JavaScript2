"use strict";

//for/in - is typically used to iterate over the properties of an object

// Loop through objects

const colorObj = {
  color1: "red",
  color2: "blue",
  color3: "orange",
  color4: "green",
};

for (const key in colorObj) {
  console.log(colorObj[key]); // iterate over all color and print there names
  console.log(colorObj.color2); // print only color2
}

// Loop through arrays
// const colorArr = ["red", "green", "blue", "yellow"];

// for (const key in colorArr) {
//   console.log(colorArr[key]);
//   //console.log(colorArr[1]);
// }
