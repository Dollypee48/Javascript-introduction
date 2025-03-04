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

//Equality Operator

//Strict (===)

// console.log(5 == "5");
console.log(5 === "5");
console.log(5 === 5);
console.log(true === 1);
// console.log([] === 0)
// console.log(true == 1);
console.log(null === undefined);
console.log(`[1, 2, 3]` === `[1, 2, 3]`);
// console.log([1, 2, 3] === [1, 2, 3]);
// console.log({} === {});

let obj1 = {name: "lateefa"};
console.log(typeof obj1)
let obj2 = {name: "lateefa"}

console.log(obj1 === obj2 )
// console.log([obj1] === [obj2]) 

let array1 = [1, 2, 3]
console.log(typeof array1)
let array2 = [1, 2, 3]

console.log(array1 === array2)

//loose (==)

console.log(5 == "5");
console.log(5 == 5);
console.log(true == 1);
console.log(null == undefined);
console.log(`[1, 2, 3]` == `[1, 2, 3]`);

let obj3 = {name: "lateefa"};
let obj4 = {name: "lateefa"};

console.log(obj3 == obj4 );

let array3 = [1, 2, 3];
let array4 = [1, 2, 3];

console.log(array3 == array4);

console.log([] == 0);
console.log([1] == 1);
console.log(null == false);
console.log("\t\n" == 0);
console.log("Ridox" == "Dollypee");
console.log([1, 2] == "1,2");

console.log("das" + "asn")