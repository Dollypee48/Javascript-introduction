// JSON stands for JavaScript Object Notation. It is a lightweight, text-based format used for data interchange. JSON is easy for humans to read and write, and easy for machines to parse and generate.

// JSON is built on 2 basic structure 
// Objects and Arrays

// {
//     "name": "John",
//     "age": 30,
//     "city": "New York",
//     "isStudent": false,
//     "courses": ["Math", "Science"],
//     "address": {
//       "street": "123 Main St",
//       "city": "New York"
//     }
//   }

  // JSON data type 
  // string, number, array, object, null, boolean



// JSON.stringify() and JSON.parse() in JavaScript
// These two methods are commonly used to convert JavaScript objects into strings and vice versa. They play a key role in handling JSON (JavaScript Object Notation) data, often used in web APIs, storage, and other scenarios where data needs to be transferred in a text format.

// The JSON.stringify() method converts a JavaScript object or value to a JSON string.

// syntax JSON.stringify(value, replacer, space)

const obj = {
    name: "John",
  age: 30,
  city: "New York"
}
const jsonstring = JSON.stringify(obj)
console.log(jsonstring)


// The JSON.parse() method parses a JSON string and converts it into a JavaScript object.

// Syntax:
// JSON.parse(text, reviver)