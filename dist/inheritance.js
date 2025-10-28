// Inheritance
class Animal {
    name;
    // name: string;
    // constructor(name: string) {
    //     this.name = name;
    // }       // full from of constructor with property
    // short form of constructor but same work
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving...`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('woof woof');
    }
}
const mydog = new Dog('Lalulu');
mydog.move();
mydog.bark();
export {};
// note
//🟩 1. The Dog class does not define its own constructor.
// That means:
// class Dog extends Animal {}
// is treated by TypeScript as if it had this constructor behind the scenes 👇
/**
 *
  constructor(...args: any[]) {
  super(...args);
}

 */
// So, the child class automatically calls the parent constructor with the same arguments.
// final note -- when you don’t define a constructor in the child class, TypeScript automatically creates one for you behind the scenes
