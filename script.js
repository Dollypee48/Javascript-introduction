// Javascript Variables, Data Types, and Operators

// Variable Keywords: const and let

let a = 10;

console.log(a)

a = 25;
console.log(a)

const myNumber = 30;
console.log(myNumber)

let b = 3;
let c = 4;
let temp;

// let b = 3, c = 4, temp;

temp = b;
b = c;
c = temp;

console.log(b)
console.log(c)
console.log(temp)

// console.log( `b: ${b}, c:${c}, temp: ${temp}`)

// javascript Data types: Primitive and Non-Primitive data types 

let studentNames = ["Dolapo", "Ridwan", "Mueez", "Feranmi"]; // primitive
let primitive = 10; // primitive

let anotherPrimitive = primitive;

primitive = 30;

console.log({primitive, anotherPrimitive})

//Non-primitive Data types

let newStudentNames = studentNames;

studentNames = ["Soliu", "Abdullahi"];

 console.log({studentNames, newStudentNames})

studentNames[0] = "Dollypee"

console.log({studentNames, newStudentNames})

newStudentNames[2] = "Habeeb"; 
console.log({studentNames, newStudentNames})
console.log(typeof "habeeb") // data type checking


// Javascript operators

// Logical operator;

const num1 = 10;

const name1 = "10";

// const trueValue = num1 && name1 ? "It is truthy value": "It is false"
const trueValue = num1 || name1 ? "It is truthy value": "It is false"

console.log(`${trueValue}`)


// comparison operator

let num2 = 10;
let num3 = "10";

const result = num2 !== num3 ? "yes": "no"

console.log(num2 !== num3);

// let a = 5;
// let b = 3;

// conts result;

// result = a + b;
// console.log(result)


