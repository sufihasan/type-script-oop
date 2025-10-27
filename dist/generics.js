"use strict";
// first without generics
Object.defineProperty(exports, "__esModule", { value: true });
function printStringValue(value) {
    console.log(`The value is: ${value}`);
}
function printNumberValue(value) {
    console.log(`Number Value is: ${value}`);
}
function printBooleanValue(value) {
    console.log(`boolean Value is: ${value}`);
}
// using generic we can make in one function.
function printf(data) {
    console.log('using generic out put of data', data);
}
printf('My name is Khan');
printf(1000);
printf(true);
const userResponse = {
    success: true,
    data: {
        name: 'Abul Kasem'
    }
};
const numberResponse = {
    success: false,
    data: {
        salary: 10000
    }
};
