//cONSTRUCTOR FUNCTIONS

//CREATES OBJECT WITH THESE KEYS AND VALUES
function Dog(name, typ, trick) {
  this.name = name,
    this.type = typ,
    this.trick = trick
};

const newDog = new dog(ellie, shnug, fetch)

//USE PROTOTYPE TO ADD FUNCTION TO cONSTRUCTOR FUNCTION
function Pokemon(n, hp, attack) {
  this.name = n;
  this.hp = hp;
  this.attacks = attack;
}

Pokemon.prototype.attack = function () {
  var ranindex = Math.floor(Math.random() * this.attacks.length);
  console.log(this.attacks[ranindex]);
}

//CONNECT TWO cONSTRUCTORS TOGETHER -- MAKE SURE TO DO THIS BEFORE ADDING A NEW FUNCTION TO THE NEW cONSTRUCTOR OR ELSE IT WILL BE OVERWRITTEN!
Survivor.prototype = Object.create(Human.prototype);



// ------------------------------------------------------------------- //

PARSE OBJECT

JSON.stringify(response.tracks.items[0], null, 2))

// ------------------------------------------------------------------- //
ES6 NOTATIONS
// ------------------------------------------------------------------- //

//METHODS INSIDE OF OBJECTS

const person = {
  name: 'Khoa',
  walk() { },
  talk() { }
};

// ------------------------------------------------------------------- //

//SPREAD OPERATOR

//CONCAT ARRAY
const first = [1, 2, 3]
const second = [4, 5, 6]

const combined = [...first, 'a', ...second],
//combined = [1,2,3,'a',4,5,6]

// ------------------------------------------------------------------- //

//CLONE ARRAY
const first = [1, 2, 3]
const clone = [...first]
//clone = [1,2,3]

// ------------------------------------------------------------------- //

//CONCAT OBJECT
const first = { name: 'Khoa' };
const second = { job: 'Instructor' };

const combined = { ...first, ...second, location: 'Amercia' }

// ------------------------------------------------------------------- //

//CREATING cLASS
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

const person = new Person("Khoa");

// ------------------------------------------------------------------- //

//INHERITANCE
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

const person = new Person("Khoa");

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("Teach");
  }
}

const teacher = new Teacher("Khoa", "BSS");

// ------------------------------------------------------------------- //

MODULES

//NAMED EXPORTS
import { Teacher } from "./teacher";

//must export before it can imported. 
//these are called named export
export class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("Teach");
  }
}

const teacher = new Teacher("Khoa", "BSS");

// ------------------------------------------------------------------- //
//DEFAULT EXPORTS
//THis is when there is only 1 object being exported from a file

export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("Teach");
  }
}

import Teacher from './teacher';
//instead of { Teacher }

// ------------------------------------------------------------------- //
//OBJECT DESTRUCTORING
//DO this when statements like this.state.count is repeated
state = {
  count: 0
};

const { count } = this.state;
//count = this.state.count

// ------------------------------------------------------------------- //
//FILTER

//GET ALL MOVIES EXCEPT FOR THE ONE WITH THIS SPECIFIC ID
const movies = this.state.movies.filter(m => m._id !== movie.id);



