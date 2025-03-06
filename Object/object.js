// Object: Key, Values and Methods

// const objectName = {key: Value}


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
    name: "dolapu", 
    age: 30,
    favNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    favAddiction:  function() {
       return this.favNumber.reduce((acc, cur) => (acc +  cur), 0)
    }

}

console.log(nameStudent.favAddiction())