// String

const mixedStringCase = "Hello, how are you?"
const lowerCase = mixedStringCase.toLowerCase()
const upperCase = mixedStringCase.toUpperCase()
 console.log(lowerCase)
 console.log(upperCase)

 //Searching for a soft string


// indexOf(), lastIndexOf() startsWith(), endsWith(), reverse(), join(), repeat(), trim(), slice(), splice()

 
 // indexOf()

 // This is used to find the first occurrence of a specified value in a string or array.

 const example = "I love cat, Cat are great"

 console.log(example.indexOf("cat"))

 let sentence = "JavaScript is awesome!";
 
 let sent = sentence.indexOf("is")
 console.log(sent)

 //lastIndexOf()

 // This is used to find the last index of a specified value in a string or array.

 let sentences = "JavaScript is awesome, and JavaScript is fun!";

 let sentenceses = sentences.lastIndexOf("JavaScript")
 console.log(sentenceses)

 let fruits = ["apple", "banana", "orange", "apple", "banana", "orange"];

 console.log(fruits.lastIndexOf("apple"))

 // startsWith()

 //The startsWith() method in JavaScript is used to check if a string starts with a specified substring. It returns true if the string starts with the given substring, and false if it does not.

 let greet = "Hello, World!";

 console.log(greet.startsWith("Hello"))
 console.log(greet.startsWith("World"))

 let array = ["apple", "banana", "cherry"];

 let arra = array[0].startsWith("app")

 console.log(arra)


 //endsWith()

 // The endsWith() method in JavaScript is used to check if a string ends with a specified substring. It returns true if the string ends with the given substring, and false if it does not.

 let senten = "Hello, World!";

console.log(senten.endsWith("World!")); 
console.log(senten.endsWith("Hello"));  

let text = "JavaScript";

console.log(text.endsWith("script")); 
console.log(text.endsWith("Script")); 

// reverse()
//The reverse() method in JavaScript is used to reverse the order of the elements in an array. It modifies the original array and returns the reference to the same array, with the elements in reverse order.

let numbers = [1, 2, 3, 4, 5];

let number = numbers.reverse()
console.log(number)

let fruited = ["apple", "banana", "cherry"];

console.log(fruited.reverse());

let word = "hello";

let reversedWord = word.split("").reverse().join("");
console.log(reversedWord);  


//join()
//The join() method in JavaScript is used to join all elements of an array into a single string. You can specify a separator string that will be inserted between each element of the array. If no separator is provided, a comma (,) is used by default.

// joining with default separator

let fruitee = ["apple", "banana", "cherry"];

let result = fruitee.join();
console.log(result);  

// joining with no seperator

let results = fruitee.join("");
console.log(results); 

//joining with custom seperator

let resulty = fruitee.join(" _ ");
console.log(resulty); 

//repeat() 
//The repeat() method in JavaScript is used to repeat a string a specified number of times and returns a new string. This method is useful when you need to repeat a string multiple times, such as generating repeated patterns or repeating a character sequence.

let repeatWord = "hello ";

let resultRepeat = repeatWord.repeat(3);
console.log(resultRepeat); 


//trim() 
// The trim() method in JavaScript is used to remove whitespace from both ends (the beginning and the end) of a string. It does not remove whitespace between words or characters in the middle of the string.

let texts = "   Hello, World!   ";

let trimmedText = texts.trim();
console.log(trimmedText); 

let textSentence = "   JavaScript is awesome!   ";

let trimText = textSentence.trim();
console.log(trimText);  


//slice() 


//splice()

//split()
//The split() method in JavaScript is used to split a string into an array of substrings based on a specified delimiter or separator. This is useful for breaking down strings into smaller, manageable pieces.

let textToSplit = "apple,banana,cherry";

let splitResult = textToSplit.split(",");
console.log(splitResult);

let sentenceToSplit = "JavaScript is awesome";

let words = sentenceToSplit.split(" ");
console.log(words);  

let textSplit = "one,two,three,four,five";

let resultSplit = textSplit.split(",", 3);
console.log(resultSplit); 

let textHello = "hello";

let resultHello = textHello.split("");
console.log(resultHello); 

function reverseString (stringReverse, callback) {
    setTimeout(() => {
const reversed = stringReverse.split("").reverse().join("");
callback(reversed) 
    }, 1000)
}

function stress(stringReverse) {
    console.log(stringReverse)
}

reverseString("Hello", stress)

//length method

let item = "DLT Africa!"

const length = item.length;
console.log(length)

//------------CharAt()--------

const index = item.charAt(0);
console.log(index)

let str = "JavaScript";
let char = str.charAt(4);

console.log(char);

//----------indexOf-------

const firstOccurence = item.indexOf("Africa")
console.log(firstOccurence)

// --------subString...........

const extractE1b = item.substring(1, 5)
console.log(extractE1b)

console.log(item)

const extractE2 = item.slice(0, 7)
console.log(extractE2)

//--------split()---------

const split = item.split("")
console.log(split)
 
const splits = item.split(" ")
console.log(splits)

//------join()-------

const join = splits.join(" ")
console.log(join)

//-------toUpperCase-------

const upper = item.toUpperCase()
console.log(upper);


//-------toLowerCase----------

const lower = upper.toLowerCase()
console.log(lower)

// --------includes()------

const checkAvailability = item.includes("Africa")
console.log(checkAvailability)

//------startsWith()------endsWith----

const startWith = item.startsWith("DLT");
console.log(startWith);

const endWith = item.endsWith("Nigeria")
console.log(endWith);

//--------Trim()--------

const email = "   yourname@gmail.com  "

console.log(email)

const trimmed = email.trim()
console.log(trimmed)

const replace = item.replace("!", "");
console.log(replace);

const concat = item.concat(trimmed)
console.log(concat)

// VALUE & REFRENCE in JS

// value and reference are two different ways that data can be handled when assigned to variables, passed to functions, or manipulated.

// primitive [passed by Value]

let a = 6;
let b = a;

console.log(b)
console.log(a)

b = 10;

console.log(b)

let firstName = "Oluwaferanmi";
let fullname = firstName;

console.log(fullname)

fullname = "Oluwaferanmi Alaba"
console.log(fullname)

// Non pimitive [passed by reference]

let firstExample = {age: 12};
let example2 = firstExample;

example2.age = 20;

console.log(firstExample)
console.log(example2)

// Spread Operators

// this allow to unpark attribute like string, array, map etc and oblect into individual or key value pairs

// spread operator allow you to copy an object or array  and this opeartion is called shallow copying 

const arr =[ 1, 2, 10, 405];
const arrClone = [...arr]

console.log(arrClone)
arrClone.push(4)
console.log(arr)
console.log(arrClone)

let arr1 = ["Habeeb", "Dolapo"];
let arr2 = ["Jide", "Shola"]

const merged = [...arr1, ...arr2];
console.log(merged)

let arr3 = {name: "Habeeb", age:30};
let arr4 = {author: "Shola", school: "DLt"};

const merged2 = {...arr3, ...arr4}
console.log(merged2)

function sum(a,b,c) {
    return a + b + c
}

const values = [12, 12, 12]

const resulted = sum(...values)

console.log(resulted)

//Destructuring

let person = {name: "Alhaji Agba", age: 102, status: "Dead"};

const {name, age} = person;

console.log(name)

let fruit = ["Apple", "Banana", "Cherry", "Date", "Egg plant"]

const [first, second, third] = fruit;
console.log(first);
console.log(first, second)

