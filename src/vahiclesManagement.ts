// vahicle management project

// create an interface
interface Vehicle {
    brand: string;
    speed: number;
    move(): void; // This means the class must have a method named move() that returns nothing (void).
    // move: ()=> void; // This means the class (or object) must have a property named move whose value is a function returning nothing (void).
}

// create an parent class  Car
class Car implements Vehicle {
    // brand: string;
    // speed: number;

    // constructor(brandP: string, speedP: number) {
    //     this.brand = brandP;
    //     this.speed = speedP;
    // }

    protected year: number = 2025; // make a property that is protected

    constructor(public brand: string, public speed: number) { }  // short from of define constructor

    move(): void {
        console.log(`The ${this.brand} car is moving at ${this.speed} km/h`);
    }

}

// step3: create a child class
class ElectricCar extends Car {
    charge() {
        console.log(`${this.brand} is charging... ${this.year}`);
    }
}

// step4: create an object instance

const tesla = new ElectricCar('tesla model 3', 100);
tesla.move();
tesla.charge();

