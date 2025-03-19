console.log("hello")

// Callback ---> Functions pass as parameter to another function 

// Example

function car(name, Callback){
    console.log("The model is " + name);
    Callback();
}

function callcar() {
    console.log("Move on!")
}
car("BMW", callcar)


function greet(name) {
    setTimeout(() => {
        console.log("Hello " + name)
    }, 2000)
}

greet("feranmi")


function fetchData(Callback) {
    setTimeout(() => {
        Callback("Data received");
    }, 1000)
};

fetchData((data) => {
    console.log(data);
});

let numbers = [2, 4, 6, 8];

numbers.map((item) => {
    console.log(item * 2)
})

function greetUser(name, callback){
    console.log("Hello " + name )
    callback();
}

    function greet(){
console.log("Thank You!");
    }

    greetUser("Dolapo", greet);


    // Callback hell

    // simulate user auth flow

    function getUser(userId, callback) {
        setTimeout(() => {
            console.log("user fetched from the dataBase");
            callback(null, {id: userId, username: "leaky😘😘" })
        }, 1000)
    }

    function validatePassword(user, callback) {
        setTimeout(() => {
            console.log("Password Validated")
            callback(null, user)
        }, 1000)
    }

    function fetchUserPerm(user, callback){
        setTimeout(() => {
            console.log("Permission retrieved")
            callback(null, {...user, permission: ["read", "write"]});
        }, 1000)
    }

    function fetchUserProfile(user, callback){
        setTimeout(() =>{
            console.log("User profile retrieved!")
            callback(null, {...user, profile: {age: 26, email: "dolapo@gmail.com"}})
        }, 1000)
    }

    function userResponse(user, callback){
        setTimeout(() => {
            console.log("Response for the user", user)
            callback(null, "Success ✅")
        }, 1000)
    }

    // callback hell start here.

    getUser(1, (error, user) => {
        if (error) {
            console.error(error)
        }

        validatePassword(user, (error, validUser) => {
            if (error) {
                console.error(error);
            }
            fetchUserPerm(validUser, (error, userWithPermission) => {
                if (error){
                    console.error(error)
                }
                fetchUserProfile(userWithPermission, (error, userprofile) =>{
                    if (error){
                        console.error(error)
                    }
                    userResponse(userprofile, (error, response) => {
                        if (response){
                            console.info(response);
                        }else {
                            console.log(error)
                        }
                    })
                })
            
                })
            })
        });




        //promise

    // A promise represent a number that may be available now ,later, in the future or never.it  then avoid callback hell by providing . then and . catch method

// create nd used promise

const promise = new Promise ((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("promise resolved successfully")
    } else (
        reject("I no want ---> mi o fe")
    )
})
    
promise
.then((result) => console.log(result))
.catch((error) => console.log(error));

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

delay(2000).then(() => console.log("Executing after 2 seconds")).catch(() => console.log("Error"));

// Chaining promise

function firstTask() {
    return new Promise (resolve => {
        setTimeout(() => {
            console.log("First task")
            resolve()
        }, 3000)
    })
}
function secondTask() {
    return new Promise (resolve => {
        setTimeout(() => {
            console.log("Second task")
            resolve()
        }, 3000)
    })
}

firstTask().then(secondTask).then(() => console.log("Task completed")).catch(() => console.log("Error"))


function  getCohort(cohortId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("user fetched from data base");
            resolve({id: cohortId, username: "Dollypee"})
        }, 2000);
    });
}

function validateCohortPwd (cohort) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("Password Validated");
            resolve(cohort);
        }, 2000)
    })
}

function fetchCohortPerm(cohort) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("Permission Fetched");
            resolve({...cohort, permission: ["read", "write"]});
        }, 2000)
    })
}

function fetchCohortProfile(cohort) {
   return new Promise ((resolve) => {
    setTimeout(() => {
        console.log("Cohort Profile Fetch");
        resolve({...cohort, profile:{age: 20, email: "peezle@gmail.com"}})
    }, 2000)
   })
}

function cohortResponse(cohort) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("Response of the cohort.", cohort);
            resolve("It was Successful✅")
        }, 2000)
    })
}

getCohort(1)
.then(validateCohortPwd)
.then(fetchCohortPerm)
.then(fetchCohortProfile)
.then(cohortResponse).then((success) => console.log(success))
.catch((error) => console.error(error));


const registerUser = new Promise((resolve, reject) => {
let success = true;

setTimeout(()=>{
    if(success) {
        resolve("The operation is successful")
    }else {
        reject("The operation failed")
    }

}, 2000);

})

registerUser.then((positiveResult) => {
    console.log({resolve: positiveResult})
}).catch((negativeResult) => {
    console.log({reject: negativeResult})
}).finally(() => {
    console.log("The operation Completed")
})


// Async / awiat: Simplifies the asynchronous handling process


const fetchMyData =() => {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve("Data Fetched")
        }, 2000)
    })
}

const handleFetchData = async () => {

    const data = await fetchMyData();
    console.log({result: data})

}

handleFetchData()





// EXAMPLE 2

const cohort = {name: "Muse",height: "77", skin:" fair"}
  
const fetchCohortData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cohort)
    }, 3000)
  })
}

const processCohortData = (data) =>{
  return new Promise ((resolve) => {
    setTimeout(() => {
      console.log(data)
      resolve(data)
    }, 4000)
  })
}
const savedCohortData = (processedData) =>{
  return new Promise ((resolve) => {
    setTimeout(() => {

      resolve(processedData)
    }, 5000)
  })
}

const handleCohortData = async () =>{
  console.log("Starting point");

  const data = await fetchCohortData();
  console.log({step1: data});

  let processedData
  const getProcessData = await processCohortData(data);

  if(getProcessData){
    const numHeight = Number(getProcessData.height);
    const newResult = {...getProcessData, height: numHeight}

    processedData = newResult;
  }
  console.log({step2: processedData});

  const savedData = await savedCohortData(processedData);
  console.log({step3: savedData});

}

handleCohortData();


// Error handling in async / await

const fetchUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User Fetched")
        }, 5000)
    })
}

const fetchPost = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Fetched successfully")
        }, 5000)
    })
}

const handleUserAndPost = async () => {

    try{
        console.log("fetching user and posts")

        const user = await fetchUser();
        const posts = await fetchPost();
        // const [user, posts] = await Promise.all([fetchUser(), fetchPost()])

        console.log(`user: ${user}`)
        console.log(`posts: ${posts}`)

    } catch (error)  {
        console.log(`Error: ${error}`)
    
    } finally {
        console.log("Operation Completed")
    }
    
}

handleUserAndPost();






// class work

// Inscructions

// 1. Create  function to simulate fetching user data from a database (use setTimeout)
// 2. Create another function to simulate fetching user tasks from a database
// 3. Use async/await with try..catch to handle errors
// 4. Simulate a case where the user is not found, and another where the tasks fail to load

// Correction 


const users = {
    1: {id: 1, name: "Soliu", skin: "Dark"},
    2: {id: 2, name: "Ridwan", skin: "Light"},
    3: {id: 3, name: "Feranmi", skin: "Dark"}
  
  }
  
  
  const getTheUser =  (userID) => {
    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
  
        if (users[userID]) {
  
          resolve(users[userID])
          
        }else {
  
          reject(new Error("User not available in the database"))
        }
        
      }, 2000);
    })
  }
  
  
  const getUserTask =  (userID) => {
    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
  
        const tasks = {
          1: ["Dance", "Give up"],
          2: ["Cook", "Break fast"],
          3: ["Attend meeting"]
        }
        
        if (users[userID] && tasks[userID])  {
  
          resolve(tasks[userID])
          
        }else {
  
          reject(new Error("User with this task is not available in the database"))
        }
      }, 2000);
    })
  }
  
  
  const getUserAndTask = async (userID) => {
    
  try {
  
    console.log("Fetching user....")
  
    const user = await getTheUser(userID);
  
    console.log({user});
  
    console.log(`Fetching ${user?.name}'s task`);
    
    const userTask = await getUserTask(userID);
  
    console.log(`${user?.name}'s has this task: ${userTask}`);
    
  } catch (error) {
  
    console.error(`Error : ${error}`)
    
  }finally {
  
    console.log("Operation completed")
  }
  
  }
  
  getUserAndTask("3")



