"use strict";
function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (xp) {
  this.points = this.points + xp; // this.points +=xp
  if (this.points >= 10) {
    this.lvl += 1; // this.level ++
    this.points -= 10;
  }
};

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
};

let player1 = new Player("Bob");
player1.gainXp(5);
player2.gainXp(7);

console.log(player1.describe());
console.log(player2.describe());
