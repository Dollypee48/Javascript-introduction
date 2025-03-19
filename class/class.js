////CLASS
//a class is a blueprint for creating objects with shared properties and methods. 

// ways of creating object 

// 1. object literal notation
// 2. contructor function
// 3. object contructor 
// 4. using class keyword.

// 1. object literal notation
// let, const, 
// 
// it less complex and easily understandable 

// not Reusable, cannot create a blueprint

// contructor function
// it reusable and can create blueprint but it is not inheritable

// object contructor
// it create a new empty object that can be use dynamically
// it is not reusable

// using class keyword
// it is reusable and inheritable and create blue print
// it is an hoisted porperty

// 4 ways of creating object

// 1. literal notation: not inheritable and not reusable but readily available for use.literal notation refers to the way you directly write values in their simplest form, without needing to call a constructor or use additional methods.

const student = {
    name: "soliu",
    age: 10,
    printAge: function () {
        console.log(`${this.name}'s age is ${this.age}`)
    }
}

console.log(student.printAge());

const colors = ['red', 'green', 'blue'];
console.log(`There are the colors: ${colors}`)

//2. object contructor: it is the same as literal notation just that it help create object dynamically using "new object()"

const person = new Object()

person.name = "feranmi"
person.age = 20

console.log(person);

//3. constructor function : This creates a blueprint and is reusable. but inheritance is likely complex to structure.

function car (name, color, brand, horsePower){
    this.name = name;
    this.color = color;
    this.brand = brand;
    this.horsePower = horsePower;

    // this.printColor = function () {
    //     console.log(`${this.color}`)
    // }
}

car.prototype.printName = function () {
    console.log(`The car name is ${this.name}`)
}

car.prototype.printColor = function () {
    console.log(`${this.color}`)
}

const car1 = new car ("camry", "white", "toyota", 200)

console.log(car1)

console.log(car1.printColor())
console.log(car1.printName())


//4. class: it is inheritance and also reusable. it extends the functionality of contructor function

class House {
    constructor (type, color, address) {

        this.type = type;
        this.color = color;
        this.address = address;

    }

    printHouseAddress() {
        console.log(`${this.address} is the address of the house with the ${this.color} color`)
    }

}

const house1 = new House("Duplex", "Brown", "No17, Pegamut Estate")

console.log(house1)
console.log(house1.printHouseAddress());

//inheritance : it uses "extend" and "super" keyword

class duplexBuilding extends House {

    constructor (type, color, address, height, windowSize) {

        super(type, color, address)

        this.height = height;
        this.windowSize = windowSize;

    }

    printHouseAddress() {
        console.log(`${this.address} is the address of the house with the ${this.height} height`);
    }


    printType(){
        console.log(`${this.type} is the house type`)
    }
}

const  newDuplexBuilding = new duplexBuilding("Duplex", "white", "ijagbo, offa road", 200, 16);

console.log(newDuplexBuilding)
console.log(newDuplexBuilding.printHouseAddress())
console.log(newDuplexBuilding.printType())


class Vehicle {

    constructor  (make, model, year ) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    vehicleMessage () {
        console.log(`The model of the vehicle is ${this.model}`)
    }
}

const vehicleDetails = new Vehicle ("Lexus", "Lexus es350", 2025)

console.log(vehicleDetails);
console.log(vehicleDetails.vehicleMessage());

class motor extends Vehicle {

    constructor (make, model, year, numberOfDoors) {

        super(make, model, year)

        this.numberOfDoors = numberOfDoors;
    }

    carMessage() {
        console.log(`The car Have ${this.numberOfDoors} number of doors`)
    }

}

const carDetails = new motor ("Lexus", "Lexus es350", 2025, 4)

console.log(carDetails);
console.log(carDetails.carMessage());


class Book {

    constructor (title, author, pages) {

        this.title = title;
        this.author = author;
        this.pages = pages;

    }

    bookPrint() {
        console.log(`The title of the book is ${this.title} and is wriiten by ${this.author}, the book have ${this.pages} pages `)
    }

}

const bookDetails = new Book ("Road to Success", "E.O Agbabiaka", 98)

console.log(bookDetails);
console.log(bookDetails.bookPrint());

class EBook extends Book {

    constructor (title, author, pages, fileSize) {

        super (title, author, pages);

        this.fileSize = fileSize;

    }

    ebookDetails() {
        console.log(`The file size is ${this.fileSize}`)
    }

}

const printEbook = new EBook ("Road to Success", "E.O Agbabiaka", 98, "A4");

console.log(printEbook);
console.log(printEbook.ebookDetails())