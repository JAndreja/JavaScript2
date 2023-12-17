"use strict";

class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  static getClass() {
    return "Rectangle";
  }
}

console.log(Rectangle);

const rect = new Rectangle("Rectangle", 20, 20);
console.log(rect);

// to call a static method
console.log(Rectangle.getClass());
