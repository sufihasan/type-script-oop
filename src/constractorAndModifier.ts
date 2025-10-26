
class Person {
    name: string;
    age: number;

    constructor(nameP: string, ageP: number) {
        this.name = nameP;
        this.age = ageP;
    }

    greet() {
        console.log(`welcome ${this.name} and your age is ${this.age}`);
    }
}


// create and instance (object ) of Person class
// when we make instance (object) of a class, its constructor call automatically 
const user1 = new Person('Hasan', 27);
user1.greet();   // call greet via object

const user2 = new Person('Shaly', 22);
user2.greet();
