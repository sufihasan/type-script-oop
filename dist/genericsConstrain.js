"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// normal generic
function logData(data) {
    console.log(data);
}
logData('some data');
logData(50);
logData(true);
logData(['124ab', '256bc', '512ca']);
// generic with constran
function printlenth(item) {
    console.log(item.length);
}
printlenth('hasan');
printlenth([21, 45, 66]);
function idCheck(item) {
    return item.id;
}
const result = idCheck({ id: 120 });
console.log('The result is', result);
