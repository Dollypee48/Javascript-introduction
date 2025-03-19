
// MODULES 
// modules allow you to break up your code into separate files, making it easier to manage, maintain, and reuse. Modules enable you to export parts of your code from one file and import them into another file.




import {simpleInterest, circleAreaCircum, areaTriagle} from "./math.js";

const accumulatedInterest = simpleInterest(50000, 5, 2, "month" )

console.log({accumulatedInterest});


// circumference of a area area

// radius = 10cm

const area = circleAreaCircum (10, "area")
console.log({area})

const circum = circleAreaCircum(10, "circum")
console.log({circum})

const areacircum = circleAreaCircum(10, "areacircum")
console.log(areacircum);

const anything = circleAreaCircum(10, "baba tee")

console.log(anything)


const triangleArea = areaTriagle(20, 30, "area")

console.log({triangleArea})




