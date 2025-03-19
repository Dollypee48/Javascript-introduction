import {Classroom} from "./classroom.js";

const myClassroom = new Classroom()

myClassroom.addStudent("Lateefat", 200, 51)
myClassroom.addStudent("Ridwan", 40, 80)
myClassroom.addStudent("Mueez", 30, 52)
myClassroom.addStudent("soliu", 25, 100)
myClassroom.addStudent("Dolu", 20, 10)

const filteredResult = myClassroom.filterStudentGradeAndName();
const MapResult = myClassroom.getMappedResult();

console.log(filteredResult)
console.log(MapResult);