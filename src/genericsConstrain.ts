// normal generic
function logData<T>(data: T) {
    console.log(data);
}

logData<string>('some data');
logData<number>(50);
logData<boolean>(true);
logData<string[]>(['124ab', '256bc', '512ca']);


// generic with constran

function printlenth<T extends { length: number }>(item: T) {
    console.log(item.length);
}

printlenth('hasan');
printlenth([21, 45, 66]);
// printlenth(123); // Argument of type 'number' is not assignable to parameter of type '{ length: number; }'


// check id

interface HasId {
    id: number
}

function idCheck<T extends { id: number }>(item: T): number {
    return item.id;
}

const result = idCheck({ id: 120 });
console.log('The result is', result);

