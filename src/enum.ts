/**
 

enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST"
}
Here, UserRole does two jobs:

It is a type name → (the set of possible values: ADMIN | USER | GUEST)

It is also a value (object) → that contains the constants (UserRole.ADMIN, UserRole.USER, etc.)

So, UserRole works as both a type and a value in TypeScript.


 */

//🧩 What is an Enum?

//👉 enum (short for enumeration) is a special TypeScript feature that lets you define a set of named constants — values that do not change.

enum Direction {
    up,
    Down,
    Left,
    Right
}

let dir: Direction = Direction.up;
console.log(dir);

enum Role {
    user = 1,  // manually set 1 but by default 0
    instructor,
    admin,
    superAdmin
}

// string enum
enum Status {
    Success = 'SUCCESS',
    Error = 'ERROR',
    Pending = 'PENDING'
}

//in enum TypeScript automatically creates a type definition: 
enum Status1 {  // type Status = "SUCCESS" | "ERROR" | "LOADING";
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    LOADING = "LOADING"
}

// const enum 
//  use const keyword, then enum keyword and here Size is enum name
const enum Size {
    Small,
    Medium,
    Large
}

const s1 = Size.Small;
console.log('const enum', s1);

// Use-Case

// 1. Direction or Position: enum Direction {Up, Down, Left, Right}
// 2. Roles or permissions: enum Role {Guest, User, Admin}
// 3. HTTP Status or APIs: enum HttpStatus {OK = 200, NotFound = 404}
// 4. Days of week or months: enum Days {Mon, Tue, Wed, Thu, Fri}
// 5. Toggle states or modes: enum Mode { Dark, Light }
