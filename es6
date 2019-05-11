----------------------------------------------------------

Creating Classes

class Person {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    greeting() {
        console.log(`Hi my name is ${this.name}`)
    }

    drink() {
        console.log('drinking water')
    }
}

let p = new Person('khoa', 5.6);
console.log(p.height);
p.greeting();


yes yes

class Dancer extends Person {
    constructor(name, height, move, stamina) {
        // Call person constructor function and pass these to it
        // You have to say super to be able to call the Person constructor function
        super(name, height);

        this.move = move;
        this.stamina = stamina;
    }

    dance() {
        console.log(`My name is ${this.name} and the ${this.move} is my favorite move`)
    }

    //overrides the original drink() function
    drink() {
        console.log('drinkkiingng');
        //call the original drink() function
        super.drink();
    }
}

let d = new Dancer('kelly', 60, 'dab', 100)
console.log(d.move);
d.dance();
d.drink();