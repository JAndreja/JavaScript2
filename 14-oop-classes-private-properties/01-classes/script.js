"use strict";

// function Rectangle(height, width) {
//   this.height = height;
//   this.width = width;
// }

// Rectangle.prototype.area = function () {
//   return this.height * this.width;
// };

// Rectangle.prototype.perimeter = function () {
//   return 2 * (this.height + this.width);
// };

// Rectangle.prototype.isSquare = function () {
//   return this.height === this.width;
// };

// Rectangle.prototype.logArea = function () {
//   console.log("Rectangle Area: " + this.area());
// };

class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.height * this.width;
  }

  perimeter() {
    return 2 * (this.height + this.width);
  }
  isSquare() {
    return this.height === this.width;
  }
}

console.log(Rectangle);

const rect = new Rectangle("rect1", 20, 20);
console.log(rect);
console.log(rect.area());

// add a method that only exist in the rect object
rect.sayhy = function () {
  console.log(`Hello ${this.name}`);
};

rect.sayhy();
