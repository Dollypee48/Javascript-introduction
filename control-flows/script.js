console.log("hello world!")

// Control flows--> these determine how the program will be executed base on condition and iteration

// Conditionals -- if, if-else, else, ternary operator

if ("condition"){
    // code to execute if condition is met
}



let age = 30;

if (age === 25) {
    console.log("Age is greater than 25")
} else if (age < 25) {
    console.log("Age is lesser than 25")
} else {
    console.log("Age is 30")
}


let isLoggedIn = true;

if (!isLoggedIn){
    console.log("You are not logged in")
} else{
    console.log("you are logged in.")
}

let balance=500;
let withdrawalAmount=1000;

if (withdrawalAmount > balance) {
    console.log("Insufficient fund")
} else if (withdrawalAmount == balance){
    console.log("you can not empty your wallet ")
} else{
    console.log("Successful")
}

let user=18;

if (user < 18) {
    console.log("you are ineligible to vote")
} else if(user > 18){
    console.log("you can vote")
}else {
    console.log("congratulations you have voted")
}


let purchaseAmount=100;
let discount;

if (purchaseAmount >= 250) {
    discount = 10
}else if (purchaseAmount >= 150) {
    discount = 5
} else if (purchaseAmount === 100){
    discount=1.5
} else {
    discount = 0
} 

console.log(`you got a discount of ${discount}`)
// dynamic rendering

//Ternary operator is a short hand for if & else 
// condition ? expression_if_true : expression_if_false

let threashold = 40;

threashold > 40 ? console.log("Marry") : console.log("You are still a minor")


const number = 9;

const result = number % 3 === 0 ? "even" : "odd";

console.log(result)

let temperature = 60;

let entry = temperature < 12 ? "It is a cool day" : "It is a hot 🥵 day!";

console.log(entry);

//Switch Statement-- used when their are multiple possible value for a variable.

let day = "Tuesday"

switch(day) {
    case "Monday":
        console.log("Today is bright");
        break;
        case "Friday":
        console.log("T.G.I.F");
        break;
        case "Tuesday":
            console.log("Today is Tuesday");
            break;
            default:
                console.log("it is a normal day");
}

let order = "pizza";

switch (order) {
    case "Burger":
        console.log("This is Burger");
        break;

    case "pizza":
        console.log("You order a Pizza");
        break;

    case "Doughnut":
            console.log("You order a doughnut");
            break;

        default:
                console.log("Invalid order, Please select from the menu")
}

let dayNumber = 3
let dayName;

switch (dayNumber){
    case 1:
        dayName="Monday";
        break;

        case 2:
            dayName="Tuesday";
            break;

        case 3:
            dayName="Wednesday";
            break;

                case 4:
                dayName="Thursday";
                break;

                case 5:
                dayName="Friday";
                break;

                case 6:
                dayName="Saturday";
                break;

                case 7:
                dayName="Sunday";
                break;

     default:
            dayName=undefined

    }
    console.log(`day ${dayNumber}  is ${dayName}`);

    
    let domain = "Admin";

    switch (domain) {

        case "Admin":
            console.log("welcome Admin");
            break;
    
        case "Editor":
            console.log("Welcome Editor");
            break;
    
        case "Viewer":
                console.log("Welcome Viewer, granted full Access....");
                break;
    
            default:
                    console.log("Unknown role, please contact for support")
    }

    let color="green"

    switch (color) {
        case "red":
            console.log("Stop");
            break;

        case "yellow":
           console.log("Caution");
           break;
        
        case "green":
            console.log("Go");
            break;
        
        default:
            console.log("invalid color")
            
     
    }


    //Loops are used to execute a block of code multiple times.

    // For Loop= Runs a block of code for specific number of time (Syntax)

    // for (initialization; condition; update) {
    //     code execute
    // }

    for(let i = 0; i < 10; i++) {
        console.log("iteration", i)
    }

    let table = 7;
    for (let i = 1; i <= 10; i++) {
        console.log(`${table} * ${i} = ${table * i}`);
    }


    let i, x = "";
    for (i = 0; i <= 5; i++) {
        x += i;
        console.log(i);
    }

    for (let i = 1; i <= 10; i+=2 ) {
        console.log("Odd number:", i,);
    }

    for (d = 5; d <= 50; d+=5){
        console.log(d)
    }

    for (let i = 1; i <=5; i++) {
    if(i===3){
        continue;
    }
        console.log(i);
    }

    let fruit = ["Mango", "Apple", "Orange", "Banana"];

    // for(let i = 1; i <= 3; i++){
    //     if(fruit[i] === "Mango"){
    //         continue
    //     }
    //     console.log(fruit[i])
    // }
     for(let i =0; i < fruit.length; i++) {
        console.log(fruit[i])
     }

     let name1 ="Dolapo"

     for(let i = 0; i < name1.length; i++){
        console.log(name1[i])
     }

     // for...in loop 

     //Example

     let userName = {name:"Dolapo", age:13, city:"osogbo"}

     for(key in userName) {
        // console.log(userName[key])
        console.log(key + ":", userName[key])
     }

     let myDetails = { school: "Unilorin", faculty: "Agriculture"}

     for(key in myDetails) {
        console.log(myDetails[key])
     }

     let colors = ["yellow", "Red", "Blue", "Pink"]

     for(element of colors) {
        console.log( "color:" + element);
     }
        
     
// while  loop

//while (condition) {
    //code to execute 
//}

// let k = 1;

// while (k > 7) {
//     console.log(k); 
// }

let y = 0;

while (y < 10){
    y++;
    if(y===6){
        break;
    }
    console.log(y);
}

let col = ["yellow", "Red", "Blue", "Pink"]
let j = 0;

while (j < col.length){
    console.log(col[j]); j++;
}

//forEach

const students = ['Dolapo', 'Habeeb', 'jide', 'Tola'];
students.forEach((student, i) => {
    console.log(`index ${i}: ${student}`)
})

// Operation Precedence

console.log((2*6)+3-3*7/3*5%2)

console.log("dolly\tp")

//Nested Ternary

let ade = 25;

let  results = (ade >= 18) ? (ade < 21 ? "young adult" : "adult") : "Underage";
console.log(results) 

let name = null;

let greeting = name ? ` hell0 ${name}` : "hello, Quest";
console.log(greeting)


let purchaseAmounts = 0;
let discounts;

if (purchaseAmounts >= 300) {
    discount=10;
}else if (purchaseAmounts>=200) {
    discount=5;
}else if (purchaseAmounts >=100){
    discount=2;
}else {
    discount=0;
}

console.log(`your discount is ${discount}%`)
// console.log("You discount is" + discount + "%")
 