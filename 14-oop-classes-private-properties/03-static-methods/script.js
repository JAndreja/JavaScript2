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

// throw error because it is a static method. Static methods in JavaScript are called on the class itself, 
//not on instances of the class
//console.log(rect.getClass());

// to call a static method
console.log(Rectangle.getClass());
