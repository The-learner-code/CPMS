// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const auth = getAuth(app);
auth.languageCode = 'en';

let Email_Id = document.getElementById("PREmail");
let Reset = document.getElementById("ResetBtn");

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

let ForgotPasswordReset = evt =>{
    evt.preventDefault();

    if(!validateEmail(Email_Id.value) || Email_Id.value.trim()==="" || Email_Id.value.trim()=== " "){
        alert("Please enter valid Email_id...!");
        window.location.reload();
    }else{
        sendPasswordResetEmail(auth, Email_Id.value)
    .then(()=>{
        alert("Password reset email sent to you registered email_id !");
        window.location.href="UserLogin.html"
    })
    .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        window.location.reload();
    })
    }  
}
//assigning the action listiner for fetching the function
Reset.addEventListener("click", ForgotPasswordReset)