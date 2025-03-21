// JSON stands for JavaScript Object Notation. It is a lightweight, text-based format used for data interchange. JSON is easy for humans to read and write, and easy for machines to parse and generate. It is not limited to javascript only.

//How to create a JSON Object

// {
//     name: "Dolapo";
//     age: 23;
//     hobbies: ["Football", "Cooking"];
//     address: {
//         street: "Ojuelegba"; 
//         number: "No2"; 
//         city: "Osogbo"; 
//     }
// }

//fetch method

fetch("./person.json").then((res) => res.json()).then((data) => {
    console.log(data);

    const addId = {id: 1, ...data}

    console.log(addId);

    const add = addId.address;

    const desAdd = [add.number, add.street, add.city];

    const [first, second, third] = desAdd;

    console.log(`I live at number ${first} ${second} street, ${third}.`)

});

