//Web Storage API
//The Web Storage API provides mechanisms by which browsers can store key/value pairs,

// The Web Storage API offers two main mechanisms to store data:

// Local Storage
// Session Storage



document.addEventListener("DOMContentLoaded", function(){
    // Retrivr the save count from local storage or initialize to 0 if not present
    let count = localStorage.getItem("clickCount") ? parseInt(localStorage.getItem("clickCount")) : 0;
    const counterElement = document.getElementById("counter")

    //display the current count
    counterElement.textContent = count

    // Add a click event listenner to the button

  document.getElementById("increment").addEventListener("click", function(){
    count++
    counterElement.textContent = count;

    //save updated count back to local storage
    localStorage.setItem("clickCount", count)

  })
  
  document.getElementById("decrement").addEventListener("click", function(){
    count--
    counterElement.textContent = count;
  })
})



// Local Storage

// 1. Local Storage
// Local Storage is used to store data that is persistent across sessions. The data stored in local storage does not expire, and it remains available even after the browser is closed and reopened.


// 2. Session Storage is similar to Local Storage but with a key difference: the data only persists for the duration of the page session. The data is deleted when the page session ends, which typically happens when the browser or tab is closed.

// we have setItem() and getItem(), removeItem(), clear()


localStorage.setItem("name","Dolapo")

let result = document.getElementById("result").innerHTML = localStorage.getItem("name")

console.log(result)

sessionStorage.setItem("userName", "Dollypee")

let result1 = document.getElementById("demo").innerHTML = sessionStorage.getItem("userName")

console.log(result1)


