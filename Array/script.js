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

cohorts.forEach((names) => {
    console.log(names.toUpperCase())
})


//Array Method

const students = ["Yemi", "Soliu", "Zimbi", "Fatimoh", "Maryam", "Deborah"]

console.log(students)

// PUSH Method

// To add a new element to the end of an array

const pushed = students.push("Bisola", "Lateefah")
console.log(pushed) // to print new array length

// POP Method
// To remaove the last element in an array

const number = [1, 2, 5, 4, 6, 2, 5, 8, 1]
console.log(number)

const popped = number.pop() // To save the removed element in a varaible
console.log(popped); // To view the removed element
console.log(number)

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

const index1 = num.indexOf(2)
const index2 = num.indexOf(5)
console.log(index1)
console.log(index2)

//lastIndexOf

// It will start serching from the end to the beginning and search for the specified element

const lastIndexOf = num.lastIndexOf(4, num.length)
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
    console.log(totalVal, (totalVal += trans), trans)
})
console.log(totalVal)

names.forEach((names) => console.log (`congratulation ${names}, You will be representing the team i the UK next month`)) 


//Map Method 

//It is similar to forEach, it also accept up to 3 argument, it allocate memory in all data store and return values

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

console.log(prices)


const commodites = investory.map((value) => value.name)
console.log(commodites)

