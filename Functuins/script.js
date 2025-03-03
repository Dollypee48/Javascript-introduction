//Functions
// These are reusable block of code 
// Three (3) way to declare function


// // Function Declaration

// function myName (){
//     return "Hello world"
// }


// // Function Expression

// const myWorld = function(){
//     return "Hello world"
// }

// // Arrow Function

// const myName = () => {
//     return "Hello world"
// }

function add(a, b) {
    return a + b;
}
console.log(add(1, 2))

function greet(name) {
    return `"hello, + ${name}`
}
console.log(greet("Dolapo"))



function jamb(age) {
    if (age > 30) {
        return "You are too old to register"
    } else if (age < 30 && age > 18) {
        return "you are qualified to register"
    } else {
        return "Too young to register"
    }

}
console.log(jamb(25));


// Hositing is the ability to use a variable before it been declare
// var && function

function dayWeek(days) {
    switch (days) {
        case "Monday":
            return "Today's Monday";

        case "Tuesday":
            return "It's a sunny day";

        case "Wednesday":
            return "Today's Wednesday";

        case "Thusday":
            return "Today's thursday";

        case "Friday":
            return "Today's friday";

        case "Saturday":
            return "Today's Saturday";

        case "sunday":
            return "Today's Sunday";

        default:
            return "All days of the week";
    }
}

console.log(dayWeek("Tuesday"));

// Arrow Function

const checkNumber = (num) => {
    if (num > 0) {
        return "positive"
    } else if (num < 0) {
        return "Negative"
    } else {
        return "Zero"
    }
}

console.log(checkNumber(0))
console.log(checkNumber(4))
console.log(checkNumber(-4))


const isEven = (num) => num % 2 === 0 ? "Even" : "Odd"

console.log(isEven(4))

const login = (username, password, isAdmin) => {
    if (!username || !password) return "please fill the required fields";
    if (isAdmin) return "admin login successful";
    return username === "user" && password === "pass123" ? "user login successful" : "Invalid credentials";
}
console.log(login("user", "pass123", true))

const registration = (surname, firstname, lastname, password, email) => {
    if (!surname || !firstname || !lastname || !password) return "Please fill your details";

    if (password.length < 6) return "minimum of 6 character"

    return surname === "Akinola" && firstname === "Dolapo" && lastname === "Habeeb" && password === "Dolly1234" ? "Already registered" : "Invalid Details"

}

console.log(registration("Akinola", "Dolapo", "Habeeb", "Dolly1234"));


//Scope
// the way function access variable

// Global Scope
// is usally declared outside the function (variable)



// Local scope
// variable declared inside the function

// Global Scope

let globalVar = "i am global"

function showVar() {
    console.log(globalVar)
}
showVar()

// Local Scope

function showsVar() {
    let localVar = "they are local"
    console.log(localVar)
}
showsVar()

// Lexical Scope

function outterFunc() {
    let outerVar = "i am outer";

    function innerFunc() {
        console.log(outerVar)
    }

    innerFunc()
}

outterFunc()


function ourName(name) {
    function greet() {
        console.log(`Good day ${name}`)
    }
    greet()
}
ourName("Dolapo")

