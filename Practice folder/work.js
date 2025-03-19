//qestion 1

const numb = 5;

const result = numb % 2 === 0 ? "even" : "odd" ;

console.log(result)

// question 2

const numb1 = 5;
const numb2 = 7;

if (numb1 > numb2 ){
    console.log("5 is the greater number")
}else {
    console.log("7 is the greater number")
}


let age = 18;

if (age < 18) {
    console.log("You are not eligible to vote") 
}else if (age >= 18) {
    console.log("You are eligible to vote ")
}else{
    console.log ("let vote")
}


let temperature = 30;

if (temperature < 0){
    console.log("it's freezing")
}else if (temperature >= 0 && temperature <= 30) {
    console.log("The weather is normal")
}else {
    console.log("it's hot")
}

let score = 100;

if (score >= 90) {
    console.log("A")
}else if(score === 80 && score < 90) {
    console.log("B")
}else if(score === 70 && score < 80) {
    console.log("C")
}else if(score === 60 && score < 70) {
    console.log("D")
}else  {
    console.log("F")
}

// Switch Statement

let triangle = "Scalene"

switch(triangle){
    case "Equilateral":
        console.log("All three sides are equal");
        break;
    
    case "Isosceles":
        console.log("Exactly two sides are equal");
        break;

    case "Scalene":
        console.log("All three sides are equal");
        break;
    
    default:
        console.log("Not a trangle")
}

let feedBack = 4;

switch(feedBack) {
    case 1:
        console.log("Very poor");
        break;

    case 2:
        console.log("Poor");
        break;

    case 3:
        console.log("Average");
        break;

    case 4:
        console.log("Good");
        break;
    
    case 5:
        console.log("Excellent");
        break;

    default:
        console.log("Invalid rating.")
}


const number = 30;

const entry = (number === 30) ? "positive" :(number < 0) ? "Negative" : "zero";

console.log(entry)

let year = 2024;

let results = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "Leap Year" : "Not leap year"
console.log(results)

let action = "";

for(i = 2; i <= 10; i+=2){
    action += i + " ";
}
console.log(action)

let nums = 0;

for (i = 1; i<=5; i++){
    nums += i;
}
console.log(nums)



const bod = document.getElementById("changeText").addEventListener("click", function(){
    document.getElementById("greeting"). textContent = "Hello World!";

})

const cold = document.getElementById("color").addEventListener("click", function() {
    document.body.style.backgroundColor = "green"
} )

document.getElementById("greeting").style.color = "red"

// forEach

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

people.forEach((person) => {
    console.log(person.name + " is " + person.age + " Years old ")
})

function sumOfEvens(numbers) {
    let sum = 0;

    numbers.forEach(function(number) {
        if (number % 2 === 0) {  // Check if the number is even
            sum += number;  // Add the even number to sum
        }
    });

    return sum;  // Return the sum of even numbers
}

// Test cases
console.log(sumOfEvens([1, 2, 3, 4, 5, 6]));  // Output: 12
console.log(sumOfEvens([7, 9, 11, 13]));      // Output: 0
console.log(sumOfEvens([2, 4, 6, 8]));        // Output: 20



//Map 

const itSelf = [2, 4, 6, 8, 10];

const square = itSelf.map((self) =>{
    return self * self
})
console.log(square)

const nammy = ["alice", "bob", "charlie", "david"]

// const firstLetter = nammy.map((first) =>{
//  return first.chartAt(0).toUpperCase() + first.slice(1).toLowerCase()
// })

// console.log(firstLetter)

const prices = [10, 25, 50, 75, 100]

const dollar = prices.map((sign) => {
    // return  "$" + sign.toString() 
    return `$${sign}`
})
console.log(dollar)

const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 42 },
    { name: "Charlie", grade: 72 },
    { name: "David", grade: 34 }
];

 const newProperty = students.map((value) => {
    return{
        ...value,
        status: value.grade >= 50 ? "pass" : "fail"
    }
 })

console.log(newProperty)

// Filter

const numbers = [-10, 15, -5, 20, -30, 25];

const negative =numbers.filter((nega) => {
    return nega < 0
})
console.log(negative)

const names = ["John", "Elizabeth", "Sarah", "Matthew", "Anna"];

const fiveCharacter = names.filter((five) => {
    return five.length < 5;
})
console.log(fiveCharacter)

const studentss = [
    { name: "Alice", age: 16 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 18 },
    { name: "David", age: 17 }
];

const below = studentss.filter((low) =>{
    return low.age < 18;
})

console.log(below)

const books = [
    { title: "Book A", rating: 3.5 },
    { title: "Book B", rating: 4.2 },
    { title: "Book C", rating: 4.7 },
    { title: "Book D", rating: 3.9 }
];

highRating = books.filter((high) => {
    return high.rating >= 4;
})

console.log(highRating)

const strings = ["apple", "", "banana", "", "cherry", " "];

const emptyString = strings.filter((empty) => {
    return empty === "";
})
console.log(emptyString)


const numbered = [12, 45, 33, 50, 9, 17, 84, 19];

const oddNumber = numbered.filter((odd) => {
    return (odd % 2 !== 0);
}) 

oddNumber.sort()

console.log(oddNumber)

const users = [
    { id: 1, name: "John", age: 25, location: "New York" },
    { id: 2, name: "Sarah", age: 32, location: "San Francisco" },
    { id: 3, name: "Michael", age: 28, location: "Chicago" },
    { id: 4, name: "George", age: 23, location: "San Francisco" },
    { id: 5, name: "Alice", age: 27, location: "New York" },
    { id: 6, name: "Bob", age: 22, location: "New York" },
    { id: 7, name: "David", age: 29, location: "San Francisco" },
    { id: 8, name: "Emma", age: 31, location: "Los Angeles" },
    { id: 9, name: "Paul", age: 25, location: "San Francisco" },
    { id: 10, name: "Jack", age: 26, location: "New York" }
  ];

  const filtMethod = users.filter((filt)=>{
    return filt.age >= 18 && filt.age <= 30 && (filt.location === "New York" || filt.location === "San Francisco") && filt.id % 5 !== 0 && filt.name.toLowerCase().includes('a')
  })
  console.log(filtMethod)

  const orders = [
    { orderId: 1, customerName: "Alice", orderAmount: 50, status: "completed" },
    { orderId: 2, customerName: "Bob", orderAmount: 120, status: "pending" },
    { orderId: 3, customerName: "Charlie", orderAmount: 75, status: "completed" },
    { orderId: 4, customerName: "David", orderAmount: 200, status: "canceled" },
    { orderId: 5, customerName: "Eva", orderAmount: 45, status: "completed" }
  ];
  
  // Step 1: Filter completed orders
  const completedOrders = orders.filter(order => order.status === "completed");

// Step 2: Map to extract only customerName and orderAmount
const resulted = completedOrders.map(order => ({
    customerName: order.customerName,
    orderAmount: order.orderAmount
  }));
  
  console.log(resulted);


  //callback

  function parent(name, callback) {
    setTimeout(() =>{
        console.log("Good Day " + name);
        callback();

    }, 2000)
    }   

    function user() {
        console.log("I love you")
    }


  parent("Mother", user)

  let reverseNumber = [];

  function numberReverse (reverseNumber, callback) {
    setTimeout(() => {
    reverseNumber.reverse();
    callback(reverseNumber);
    }, 3000)
  }

  function reverNumber(reverseNumber) {
    console.log(reverseNumber)
  }

  numberReverse([2, 3, 4, 5], reverNumber);


  function stringReverse (reverseString, callback) {
    setTimeout(() => {
    const reserved = reverseString.split("").reverse().join("");
    callback(reserved);
    }, 3000)
  }

  function reverString(reverseString) {
    console.log(reverseString)
  }

  stringReverse("Hello", reverString);

  // Callback Hell

  const dataFromAPIs1 = {name: "Dolapo", age: 23}

  function fetchDataAPIs1 (callback){
    setTimeout(() => {
        console.log("Data fetched from APIs1");
        callback(null, dataFromAPIs1)
    }, 2000)
  }

  const fetchDataAPIs2 = {name: "Dammy", age: 30};

  function fetchDataAPI2 (callback){
    setTimeout(() => {
        console.log("Data fetched from APIs2")
        callback(null, fetchDataAPIs2)

    }, 2000)
  }

  function combineAPIsData (APIs1Data, APIs2Data, callback){
    const combineAPIDatas = {
        ...APIs1Data,
       ...APIs2Data,
    };
    callback(null, combineAPIDatas);
  }

  function processData(error, combineAPIDatas){
    if (error) {
        console.error(error)
    }else {
        console.log("APIs Data combined:", combineAPIDatas)
    }
  }

  function fetchAndCombineData(){
    fetchDataAPIs1((error1, api1Data) => {
        if(error1){
            return console.log("error from api 1", error1)
        }
        fetchDataAPI2((error2, api2Data ) => {
            if (error2){
                return console.log("error from api 2", error2)
            }

        combineAPIsData(api1Data, api2Data, processData);
        })
    })
  }
  fetchAndCombineData()

  function fetchDataFromAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataFromAPI1 = { user: 'Alice', age: 25 };
            console.log('Data from API 1 fetched.');
            resolve(dataFromAPI1); // Resolve the promise with data
        }, 2000); // Simulate a 2-second delay
    });
}

function fetchDataFromAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataFromAPI2 = { city: 'New York', country: 'USA' };
            console.log('Data from API 2 fetched.');
            resolve(dataFromAPI2); // Resolve the promise with data
        }, 3000); // Simulate a 3-second delay
    });
}

// Function to combine results from both APIs
function combineAPIData(api1Data, api2Data) {
    return {
        ...api1Data,
        ...api2Data
    };
}

// Main function that fetches data from both APIs and combines it
function fetchAndCombineData() {
    // Fetch data from both APIs concurrently
    Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2()])
        .then(([api1Data, api2Data]) => {
            // Once both promises are resolved, combine the data
            const combinedData = combineAPIData(api1Data, api2Data);
            console.log('Final Combined Data:', combinedData);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

// Call the function to start the process
fetchAndCombineData();