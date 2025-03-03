// // Accessing Elements

// // Access class

// const body = document.getElementsByClassName("body")

// console.log(body)

// // Id

// const header = document.getElementById("header")

// // console.log(header.textContent)
// // console.log(header.tagName)
// console.log(header)

// //tagName

// const hello = document.getElementsByTagName("h1")

// console.log(hello)

// //QuerySelector

// const classElements = document.querySelector(".body")

// console.log(classElements)

// // const classes = document.querySelector("#header")

// // console.log(classes)

// //QuerySelectorAll

// // const all = document.querySelectorAll("h1")

// // console.log(all)

// // const allAll = document.querySelectorAll(".body")

// // console.log(allAll)



//Dom manipulation

// textcontent
// innerhtml
// styling
// adding and removing classes
// event listener


//TEXTCONTENT

const header = document.getElementById("header")
header.textContent = "Hello Universe!"

const yeah = document.querySelector("p")

yeah.textContent = "I am a cohort member"

const h6 = document.querySelector('h6')

h6.textContent = 'I enjoy teaching'


// innerHTML

const container = document.querySelector('div')

// container.innerHTML = "<h1>Hi</h1>"

container.innerHTML = ` <h1> I do read </h1>
<p>and play football</p>`


// Styling

container.style.backgroundColor = "black"
container.style.color = "white"


// adding and removing classes

// addina class

h6.classList.add("street")

yeah.classList.remove("body")

const bodyElements = document.getElementsByClassName("body")

console.log(bodyElements)


// Adding Event Listener

//click event 

document.querySelector("button").addEventListener("click", function(){

    document.getElementById("message").

    textContent = "Button Clicked"
})
//  if (Message.textContent === "Hello!"){
//     message.textContent = "Button Clicked"
//  }else {
//     message.textContent = "Hello!"
//  }


// Mouse Event  


document.getElementById("box").addEventListener("mouseover", function(){
    document.getElementById("box").style.backgroundColor = "yellow"
})

document.getElementById("box").addEventListener("mouseout", function(){
    document.getElementById("box").style.backgroundColor = "green"
})

document.getElementById("textInput").addEventListener("keyup", function(event){
    document.getElementById("output").textContent = "you pressed:" + event.key
})


function greet(name){
    alert("Hello, " + name + "!")
}

document.getElementById("greetBtn").addEventListener("click", () => greet("Dolapo"))



const newBox = document.createElement("div")
newBox.textContent = "How are you doing Today"

document.body.appendChild(newBox)