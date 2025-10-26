
// implement keyword
// 🧩 What is implements in TypeScript?

// ➡️ The implements keyword is used when a class wants to follow the rules (structure) of an interface.

// You can think of it like this:

// “I promise my class will have everything that this interface defines.”

// So, it’s about enforcing a structure, not inheritance.

interface Driveable {
    // start(): void
    start: () => void;
    end: () => void;
}

class Car implements Driveable {
    start() {
        console.log('car is started...');
    }

    end() {
        console.log('car is stop...');
    }
}

const myCar = new Car();
myCar.start();
myCar.end();