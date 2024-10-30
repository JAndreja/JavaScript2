"use strict";

function Rectangle(width, high) {
  this.high = high;
  this.width = width;

  // this.area = function () {
  //   return this.high * this.width;
  // };
}

Rectangle.prototype.area = function () {
  return this.high * this.width;
};

console.log(Rectangle.prototype);
const rectangle1 = new Rectangle(10, 10);
console.log(rectangle1);
console.log(rectangle1.area());
const rectangle2 = new Rectangle(43, 23);
console.log(rectangle2);
console.log(rectangle2.area());
const rectangle3 = new Rectangle(80, 10);
console.log(rectangle3);
console.log(rectangle3.area());
