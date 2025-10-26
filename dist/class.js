"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name; // Property (Field)
    age; // Property (Field)
    constructor() {
        this.name = '';
        this.age = 0;
    }
    greet() {
        console.log(`welcome ${this.name} your age is ${this.age}`);
    }
}
const user = new Person();
user.name = 'Hasan';
user.age = 27;
user.greet();
const user2 = new Person();
user2.name = 'salman';
user2.age = 30;
user2.greet();
