"use strict";
// implement keyword
// 🧩 What is implements in TypeScript?
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
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
