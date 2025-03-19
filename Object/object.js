// Object: Key, Values and Methods

// const objectName = {key: Value}(object property)


const carA = {
    model: 2013,
    color: "Black",
    brand: "Mercedes",
    price: 2000,
    horsePower: 900

}

carA.model= 5050

console.log(carA.model);
console.log(carA.color);
console.log(carA.brand);
console.log(carA.price);
console.log(carA.horsePower)

console.log(carA["horsePower"]);

const cars = {
    firstCar: carA,

    secondCar: {
        model: 2014,
        color: "Blue",
        brand: "Nissan",
        price: 1000,
        horsePower: 1000

    }
}

const carAPrice = cars.firstCar.price

// const carAPrice = cars["firstCar"]["price"]

console.log({ carAPrice })


const cohort6 = {
    male: {
        names: ["Abdul", "Ridwan", "Idris", "Muiz"]
    },
    female: { name: "lateefah" }
}

const firstStudent = cohort6.male.names[0];

console.log({ firstStudent })


const dltAfrica = [{
    cohorts: {
        cohort1: {
            names: ["Biodun", "Dolu", "Anike", "shola"],
            hobbies: { 
                Biodun: "Football", 
                Dolu: "Eating", 
                Anike: "Dancing", 
                Shola: "Running" 
            },
        },
    },
},

{
    tutors: {
        names: ["Anate", "SoliuA", "SoliuM", "Abdullah"],
        hobbies: {
            Anate: "Footbal",
            SoliuA: "Eating",
            SoliuM: "Dancing",
            Abdullahi: "Running",
        },
    },
},
];

const sholaHobby = dltAfrica[0].cohorts.cohort1.hobbies.Shola

console.log({sholaHobby})

const studentAndTutor = {[dltAfrica[1].tutors.names[0]]: dltAfrica[0].cohorts.cohort1.names[2]}

console.log(studentAndTutor)

// Object with Methods

// const carB = {
//     name: "big daddy",
//     brand: "toyota",
//     date: 2013,
//     updateYear: function (newDate) {
//        this.date = newDate
//     }
// }

// console.log(carB.updateYear)



const nameStudent = {
    name: "dolapo", 
    age: 30,
    favNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    favAddiction:  function() {
       return this.favNumber.reduce((acc, cur) => (acc +  cur), 0)
    }

}

console.log(nameStudent.favAddiction())


const player = {
    firstName: "Thiago", 
    lastName: "Silver",

    age: 38,
    team: { 
        clubName: "Chelsea", 
        location: "England", 
        manager: "Tuchel"
        },

        jerseyNumber: 6

}

console.log(player)
console.log(player)
console.log(player.team.clubName)

player.team.location = "South Africa"


//builtIn Method
// A property inside an object that contain a function

const myObject = {
    myMethod1: () =>{}, // Arrow function
    myMethod2: function() {},// Function Declaration 
    myMethod3(){} // Function expression
}

//console = def tools

const dog = {
    name: "Fluffy",
    age: 20,
    bark: () => {
        console.log("woof woof")
    }
}
console.log(dog.name)
dog.bark()


// Object Method
// there are 5 common types of object method in javascript


// Object.keys ()
// Object.value ()
// Object.freeze ()
// Object.Entries ()
// Object.seal ()

// Object.keys () and Object.Values

const employees ={
    boss: "Dolapo",
    secretary:"Lateefah",
    sales: "Abdul",
    accountant: "Deborah"
}

const employeeInfo = Object.keys(employees)
console.log(employeeInfo)

const employeeInfoDetails = Object.values(employees)
console.log(employeeInfoDetails)


// Object.entries()
// it create a nested array of the key and value pairs of an object

const session = {
    id: 1,
    date: "10-march-2025",
    device: "Mobile",
    browser: "Chrome"
}

const sessionValue = Object.entries(employees)
console.log(sessionValue)

const operatingSystem = {
    name: "Ridwan",
    fashion: 18.6,
    licence: "open source"
}

const operating = Object.entries(operatingSystem)
console.log(operating)

// Object.Freeze

// it prevent modification of existing properties and prevent properties from being added or removed

const user = {
    Username: "Dollypee",
    Password: "Dolly123"
}

const userInfo = Object.freeze(user)
console.log(userInfo)

// Object.seal

// It prevent new property from being added or remove from an object

const user1 = {
    name: "Dolapo",
    age: 12
}

const userSeal = Object.seal(user1)
console.log(userSeal)

user1.age = 45;
console.log(userSeal)










