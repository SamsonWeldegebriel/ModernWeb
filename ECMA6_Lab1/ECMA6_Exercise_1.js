//ECMA6 - Exercise 1

'use strict';

class Musician {
	constructor(name) {
  		this.name = name;
  	}
  	play(piece) {
  		console.log(this.name + " is now playing " + piece);
  	}
}

let Violinist = new Musician("Celin Dion");
let Pianist = new Musician("The Weeknd");

Violinist.play("Violin");
Pianist.play("piano");