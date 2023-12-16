"use strict";
const rectangle = {
  name: "rectangle1",
  width: 10,
  high: 10,
  area: function () {
    return this.high * this.width;
  },
};

const rectangle2 = {
  name: "rectangle2",
  width: 30,
  high: 10,
  area: function () {
    return this.high * this.width;
  },
};

console.log(rectangle.name);
console.log(rectangle.area());
console.log(rectangle2.area());
