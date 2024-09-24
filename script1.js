// Data Types
let myString = "Nazrin";        // String
let myNumber = 7;                  // Number
let myBoolean = true;                // Boolean
let myUndefined;                     // Undefined
let myNull = null;                   // Null
let mySymbol = Symbol("unique");     // Symbol
let myBigInt = BigInt(124565768768);  // BigInt

// Print variable types using typeof
console.log(typeof myString);   // string
console.log(typeof myNumber);   // number
console.log(typeof myBoolean);  // boolean
console.log(typeof myUndefined); // undefined
console.log(typeof myNull);      // object (this is a known JavaScript quirk)
console.log(typeof mySymbol);    // symbol
console.log(typeof myBigInt);    // bigint
// let, const, var

// let: Block-scoped and reassignable.
let count = 5;
count = 10;
console.log(count);  // 10

// const: Block-scoped and cannot be reassigned.
const pi = 3.14;
// pi = 3.15;  // This will throw an error because const values cannot be reassigned.

// var: Function-scoped, and it can be redeclared.
var name = "Maria";
var name = "Chris";  // var allows redeclaration
console.log(name); // Chris

// Template Literals with backticks7
let firstName = "Nazrin";
let lastName = "Nagieva";
let age = 28;
let country = "USA";
let hobby = "roadtripping";
let occupation = "financier";

console.log(`Hi! My name is ${firstName} ${lastName}. I am ${age} years old, from ${country}. 
I enjoy ${hobby}, and I work as a ${occupation}.`);
let a = 20;
let b = 5;

console.log(a + b);  // Addition: 25
console.log(a - b);  // Subtraction: 15
console.log(a * b);  // Multiplication: 100
console.log(a / b);  // Division: 4
console.log(a % b);  // Modulus (remainder): 0

console.log(a == b);   // Equality: false (20 == 5)
console.log(a === b);  // Strict equality: false
console.log(a > b);    // Greater than: true
console.log(a < b);    // Less than: false
console.log(a != b);   // Not equal: true


// Using logical AND (&&)
if (a > 10 && b < 10) {
    console.log("Both conditions are true: a > 10 AND b < 10");
}

// Using logical OR (||)
if (a > 10 || b > 10) {
    console.log("At least one condition is true: a > 10 OR b > 10");
}

// Using logical NOT (!)
if (!(b > 10)) {
    console.log("Negation: b is NOT greater than 10");
}
