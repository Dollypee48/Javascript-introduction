// classwork

// using JS ES6 class and modules, create three separate modules (person.js, classroom.js, student.js), and create primary javascript file (main.js). The pearson property should be just "name" and "age". Student class should extend person. The property of a student is name, age and CanvasGradient.apply
// 1. use Array.push to add new students into array of students
// 2. use array.filter to filter students who grades exceeds 50 and also their names start with uppercase
// 3. use array.map to return the student's name and their current


class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

export {Person}


