
// first without generics

function printStringValue(value: string) {
    console.log(`The value is: ${value}`);
}

function printNumberValue(value: number) {
    console.log(`Number Value is: ${value}`);
}

function printBooleanValue(value: boolean) {
    console.log(`boolean Value is: ${value}`);
}

// using generic we can make in one function.
function printf<T>(data: T) {
    console.log('using generic out put of data', data);
}

printf<string>('My name is Khan');
printf<number>(1000);
printf<boolean>(true);

// make interface with generic

interface ApiResponse<T> {
    success: boolean;
    data: T;
}

const userResponse: ApiResponse<{ name: string }> = {
    success: true,
    data: {
        name: 'Abul Kasem'
    }
}

const numberResponse: ApiResponse<{ salary: number }> = {
    success: false,
    data: {
        salary: 10000
    }
}