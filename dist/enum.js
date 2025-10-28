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
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.up;
console.log(dir);
var Role;
(function (Role) {
    Role[Role["user"] = 1] = "user";
    Role[Role["instructor"] = 2] = "instructor";
    Role[Role["admin"] = 3] = "admin";
    Role[Role["superAdmin"] = 4] = "superAdmin";
})(Role || (Role = {}));
// string enum
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Error"] = "ERROR";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
//in enum TypeScript automatically creates a type definition: 
var Status1;
(function (Status1) {
    Status1["SUCCESS"] = "SUCCESS";
    Status1["ERROR"] = "ERROR";
    Status1["LOADING"] = "LOADING";
})(Status1 || (Status1 = {}));
// const enum 
//  use const keyword, then enum keyword and here Size is enum name
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
const s1 = Size.Small;
console.log('const enum', s1);
export {};
// Use-Case
// 1. Direction or Position: enum Direction {Up, Down, Left, Right}
// 2. Roles or permissions: enum Role {Guest, User, Admin}
// 3. HTTP Status or APIs: enum HttpStatus {OK = 200, NotFound = 404}
// 4. Days of week or months: enum Days {Mon, Tue, Wed, Thu, Fri}
// 5. Toggle states or modes: enum Mode { Dark, Light }
