

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


// Web Srorage API

// we have setItem() and getItem()

localStorage.setItem("name","Dolapo")

let result = document.getElementById("result").innerHTML = localStorage.getItem("name")

console.log(result)

sessionStorage.setItem("userName", "Dollypee")

let result1 = document.getElementById("demo").innerHTML = sessionStorage.getItem("userName")

console.log(result1)


