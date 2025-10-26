"use strict";
// vahicle management project
Object.defineProperty(exports, "__esModule", { value: true });
// create an parent class 
class Car {
    brand;
    speed;
    // brand: string;
    // speed: number;
    // constructor(brandP: string, speedP: number) {
    //     this.brand = brandP;
    //     this.speed = speedP;
    // }
    year = 2025;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    move() {
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
