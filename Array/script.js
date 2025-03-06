const cohorts = ["dolapo", "Abdul", "Ridwan", "Idris", "Feranmi", "Muiz", "Dammy", "Kabir"];
console.log(cohorts);


//Nested Array

const nested = [[1, 2], [3, 4], [5, 6]]
console.log(nested);

const newArray =  nested[0][1]

console.log(newArray);
console.log(nested.length);

// Replace array element

const replaceEl = (cohorts[1] = "lateefah");

console.log(replaceEl);
console.log(typeof replaceEl);

//To add a new element to last index of an array

cohorts[8] = "Peezle"
console.log(cohorts);

cohorts.forEach((name) => {
    console.log(name.toUpperCase())
})


//Array Method

const students = ["Yemi", "Soliu", "Zimbi", "Fatimoh", "Maryam", "Deborah"]

console.log(students)

// PUSH Method

// To add a new element to the end of an array

const pushed = students.push("Bisola", "Lateefah");
console.log(pushed) // to print new array length

let fruits = ["apple", "orange"];
fruits.push("mango");
console.log(fruits);

fruits.push("Banana", "Grape", "nuts")
console.log(fruits)

//Pushing different type of data 

fruits.push({name: "John", age: 24})
console.log(fruits)

// pushing an array
let colord = ["yellow", "red"]
fruits.push(colord)

console.log(fruits)


// POP Method
// To remaove the last element in an array

const number = [1, 2, 5, 4, 6, 2, 5, 8, 1];
console.log(number);

const popped = number.pop() // To save the removed element in a varaible
console.log(popped); // To view the removed element
console.log(number)

//using pop with mixed data type

let mixedArray = [1, 'string', true, { name: 'John' }];
let removedItem = mixedArray.pop();
console.log(removedItem);
console.log(mixedArray)

// SHIFT Method
// To remove the first element of an array

const shifted = number.shift()
console.log(shifted)
console.log(number)

const colors = ["red", "Blue", "pink", "green"]
console.log(colors)

const remEl = colors.shift()
console.log(remEl)
console.log(colors)

// UNSHIFT METHOD

// To add one or More Element to the beginning of an array

const unshi = colors.unshift("Tomato", "Black")
console.log(unshi)
console.log(colors)

// using unshift with loop

let numberd = [3, 4, 5];
for(let i = 1; i <= 2; i++){
    numberd.unshift(1);
}
console.log(numberd)

// SPLICE Method

// It allow us to add element or Value into array, it usually take 3 parameter, the first detremine where th new element are placed, the second parameter determine the numbers of element you wan to delete after you placed new element and the third detremine the element you wish to add.

const foods = ["Rice", "Beans", "Amala", "Semo", "Egg", "Iyan", "Eba"]

console.log(foods)

foods.splice(3, 0, "Tuwo", "Plantain")
console.log(foods)

const wears = ["Gucci", "D&G", "Amani", "OffThug"]
console.log(wears)

wears.splice(2)
console.log(wears)

let animals = ['dog', 'cat', 'rabbit'];
let replacedAnimal = animals.splice(1, 1, 'hamster');
console.log(animals);  
console.log(replacedAnimal);


// SLICE method

// It return a new array that contains element from a certain point (Excluding element at the position of second parameter input)first parameter is important from where to start from while the second parameter is where to end but excluding element in index position (when not use, it slices the rest of the element)

const male = ["Habeeb", "Jide", "Abdul", "Kolade", "Ridox"]

console.log(male)

const newString = "Adeyemi"
console.log(newString.length)
const sliceString = newString.slice(1,4);
console.log(sliceString)

const warriors = male.slice(1,4);
console.log(warriors)

const stakeHolders = male.slice(4)
console.log(stakeHolders);

// Or using negative parameter

const stakeHolders2  = male.slice(-2) // start counting from element(-1)
console.log(stakeHolders2);

// STRING method

const string = male.toString()
console.log(string)


//   .inCludes() Method

// it return the boolean to check if the include an element either true or false


const blean = male.includes("Dadu");
console.log(blean);

const blean2 = male.includes ("Habeeb")
console.log(blean2)

//SORT Method

// It sort the element of an array and return the sorted array in alphabetical order

male.sort()
console.log(male)


// IndexOf

// it is used to search the index of first occurence of a specified element in an array, it serach the array from the beginning to the end and return the first occurenec of specified element and if the element is not find it will return -1

const num = [1, 2, 3, 4, 9, 8, 7, 12, 11, 1, 2]
console.log(num)

const index1 = num.indexOf(9)
const index2 = num.indexOf(5)
console.log(index1)
console.log(index2)

//lastIndexOf

// It will start serching from the end to the beginning and search for the specified element

const lastIndexOf = num.lastIndexOf(2, num.length)
console.log(lastIndexOf);

// forEach

// this is the mostly used method of array, it perform an each action of an array, it all a call back function to original array

const names = ["shola", "Alaba", "Alamu"]
// names.forEach(function(){
//     console.log(names)
// })

// names.forEach(() => {
//     console.log(names)
// })

// call back used to have 3 Argument which are Value, Index and Array

names.forEach((values, i, arr) => {
    console.log(values)
    console.log(i)
    console.log(arr)
})

// call back function is used to passed funtion into another function as an argument which is then invoked inside the outer function to complete some kind of routing action



let totalVal = 0;
const trans = [42, 45, 26, 4, 13, 16]
trans.forEach((trans) =>{
    // console.log(totalVal, (totalVal += trans), trans)
    console.log(totalVal = totalVal + trans)
})
console.log(totalVal)

names.forEach((names) => console.log (`congratulation ${names}, You will be representing the team i the UK next month`)) 


//Map Method 

//It is similar to forEach, it also accept up to 3 argument, it allocate memory in all data store and return values

// it create a new array and apply function to each element without modifying the original array.
const investory = [
    {name: "Rice", price: 50000},
    {name: "Beans", price: 500},
    {name: "Gari", price: 3000},
    {name: "Semo", price: 4000},
    {name: "Yam", price: 5000}
]

const prices = investory.map((value) =>{
    return value.price
})

console.log(prices);


const commodites = investory.map((value) => value.name)
console.log(commodites);


const arr = [1, 2, 3, 4, 5, 6];
const muiltiplyValue = arr.map((el) => el * 2)

console.log(muiltiplyValue);

const words = ["hello", "world", "javascript"];
console.log(words.map((word) => word.toUpperCase()));

const priceInUSD = [200, 120, 350, 90]
const xchangeRate = 1490;

console.log(priceInUSD.map((usd) => usd *xchangeRate))

const users = [
    {name: "lateefa", age: 300},
    {name: "Abdul", age: 350},
    {name: "Muiz", age: 1450},
    {name: "Kabir", age: 1950}
]

const user = users.map((value) => {
    return value.name
})
 console.log(user)


 const products = [
    {name: "Laptod", price: 300},
    {name: "Desktop", price: 350},
    {name: "Mouse", price: 1450},
    {name: "Keyboard", price: 1950}
]

const productWithId = products.map((product, index) => ({
    id: index + 1,
    ...product,
}))

console.log(productWithId)
// console.log(products)

const idUser = productWithId.map((val) => {
    return val.id
})

console.log(idUser)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const numb = numbers.map((number) => {
        if(number < 6 ) {
            return number
        }
})

 console.log(numb)


 //Filter Method

 const evenNumber = numbers.filter((i) =>
i % 2 === 0)
 console.log(evenNumber)


const below = productWithId.filter((product) => product.price <= 1000)

console.log(below)

const character = productWithId.filter((nam) => nam.name.length < 7)

console.log(character)

let newArr = [100, "pelumi", false, {}, null, undefined]

const filterStringArr = newArr.filter((data) => typeof data === "string")

console.log(filterStringArr)


let priceNum = 0;

const numbb = productWithId.map((withId) => withId.price);

for (let i = 0; i < numbb.length; i++) {
    priceNum += numbb[i];
}

console.log(priceNum);


const humans = ["Dolu", "Habeeb", "feranmi", "abdul", ]

const upperCaseName = humans.filter((human) => {
    if (human.charAt(0) === human.charAt(0).toUpperCase() ) return human
})
console.log(upperCaseName)

const pluralCaseName = humans.filter((human) => {
    if (human.charAt(0) === human.charAt(0).toUpperCase() ) return human
}).map((element) => element + "s") 

pluralCaseName.push("Dolapo")

console.log(pluralCaseName)
console.log({pluralCaseName})


// forEach vs map

const userArr = [{name: "Habeeb", age: 15,}, {name: "Tolu", age: 10}]

userArr.forEach((arr) => arr.age += 5)

console.log({userArr})

const newUserArr = userArr.map((nam, index) => ({...nam, age: nam.age + 5, height: nam.age + 10, 
    id: index + 1
}))

console.log({newUserArr});


// Reduce Method


// syntax: array.reduce((accumulator, currentValue, currentIndex, array), initialValue)

// 1. Sum of Array element
// 2. flatten an array
// 3. Occurence of an element /item in an array
// 4. find the maximum value
// 5. Grouping data by a property


// 1. Sum of Array element

const myNums = [1, 2, 3, 4, 5];

const sum = myNums.reduce((accu, curVal) => (accu + curVal), 0);

console.log({sum});

// 2. flatten an array

const nestedArray = [[1, 2], [3, 4], [4, 6]];

const flattenedArray = nestedArray.reduce((acc, curval) => (acc.concat(curval)), [])

console.log({flattenedArray})

const flattenedArray2 = nestedArray.reduce((acc, curr) => (acc.concat(curr)), []).reduce((acc,curr)=> {
  if(!acc.includes(curr)){
  acc.push(curr)
  }
  return acc;
}, [])

console.log(flattenedArray2)

// to remove duplicate from the result, u can use reduce, filter and also for each method

const flatFilter = flattenedArray.filter((e, index, array) => array.indexOf(e) === index) 
console.log(flatFilter)


// 3. Occurence of an element/item in an array

const myFruits = ["Grape", "Banana", "Banana", "Orange"]

const count = myFruits.reduce((acc, curr) =>{
    acc[curr] = (acc[curr] || 0) + 1;

    return acc
}, {})

console.log({count});

//4. find the maximum value

const maxExample = [10, 30, 3, 100, 4];

const max = maxExample.reduce((acc, curr) => curr > acc ? curr : acc, maxExample[0]);

console.log({max})










