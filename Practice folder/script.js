const cohorts = [
    { email: "dolapo124@gmail.com", password: "Dolapo123" },
    { email: "dammy124@gmail.com", password: "Dammy123" },
    { email: "ridwan124@gmail.com", password: "Ridwan123" },
    { email: "abdul124@gmail.com", password: "Abdul123" },
    { email: "lateefah124@gmail.com", password: "Lateefah123" },
    { email: "muiz124@gmail.com", password: "Muiz123" },
    { email: "idriz124@gmail.com", password: "Idriz123" },
    { email: "kabir124@gmail.com", password: "Kabir123" },
    { email: "feranmi124@gmail.com", password: "Feranmi123" },
]

const mail = document.getElementById("mail");
const pwd = document.getElementById("pass");

const errorMessageAlert = document.getElementById("errorMessage")
errorMessageAlert.style.display = "none"


const successAlertMessage = document.getElementById("successAlert")
successAlertMessage.style.display = "none"



document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();

    // console.log(mail.value);
    // console.log(pwd.value)
    if (!mail.value || !pwd.value) {
        errorMessageAlert.style.display = "Block"; 
        errorMessageAlert.innerHTML = "please fill the required fields."; return;
       
    }

    if (pwd.value.length < 6) {
        errorMessageAlert.textContent = "password must be minimum of 6 character.";
        errorMessageAlert.style.display = "block"; return;
    }

    const user = cohorts.find(user => user.email === mail.value);
    // console.log(user)

    if (user && user.password === pwd.value) {
        alert (`Hi ${mail.value} You are now Login`);
        successAlertMessage.style.display = "block"
        errorMessageAlert.style.display = "none"; 
       
    } else {
        errorMessageAlert.textContent = "Invalid email or password";
        errorMessageAlert.style.display = "block"
    }
})


