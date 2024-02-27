// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmtr4RFpRZb6S6VV3rpdCGDdFLzAbHDMw",
    authDomain: "cpms-fca1e.firebaseapp.com",
    projectId: "cpms-fca1e",
    storageBucket: "cpms-fca1e.appspot.com",
    messagingSenderId: "763343437611",
    appId: "1:763343437611:web:09cc7394b3d9c99389cf6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

// Assigining the value to the variables
let Email_id = document.getElementById("RegisterEmail");
let Password = document.getElementById("RegisterPassword");
let CPassword = document.getElementById("RegisterConfromPassword");
let Register = document.getElementById("RegisterBtn");

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

let RegisterValidation = evt =>{
    evt.preventDefault();

    if(!validateEmail(Email_id.value.trim()) || Email_id.value.trim()==="" || Email_id.value.trim()=== " "){
        alert("Please enter valid Email_id...!");
        window.location.reload();
    }
    else if(Password.value.trim()==="" || Password.value.trim()=== " " || Password.value.trim().length<8){
        alert("Password should not be Empty or Blank or less than 8 digits...!");
        window.location.reload();
    }
    else if(CPassword.value.trim()==="" || CPassword.value.trim()=== " " || CPassword.value.trim().length<8){
        alert("Confrom Password should not be Empty or Blank or less than 8 digits...!");
        window.location.reload();
    }
    else if(CPassword.value.trim() === Password.value.trim()){
        createUserWithEmailAndPassword(auth, Email_id.value.trim(), Password.value.trim())
    .then((userCredential) => {
        // Signed up
        alert(userCredential.user.email +" Registered Successfully, Please Login...!");
        window.location.href="UserLogin.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Registration Unsuccessfull error code:"+ errorCode +" error message"+ errorMessage);
        window.location.reload();
    });
    }else{
        alert("Password and Confrom Password are not in Match...!")
    }
}
Register.addEventListener("click", RegisterValidation);