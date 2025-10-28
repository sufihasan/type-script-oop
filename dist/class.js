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
// Creating instances (objects) from the class
const user = new Person();
user.name = 'Hasan';
user.age = 27;
user.greet(); // Calling a method // output welcome Hasan your age is 27
// Creating instances (objects) from the class
const user2 = new Person();
user2.name = 'salman';
user2.age = 30;
user2.greet(); // Calling a method // output welcome salman your age is 30
export {};
