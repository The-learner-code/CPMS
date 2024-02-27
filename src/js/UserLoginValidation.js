// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// Assigining the value to the variables
let Email_Id = document.getElementById("LoginEmail");
let Password = document.getElementById("LoginPassword");
let Login_Submit = document.getElementById("LoginBtn")



 // Creating the Function for logging In
 let LoginValidation = evt =>{
    evt.preventDefault();

    if(LoginEmail.value != 'stcpms@gmail.com'){
      // Firebase signInWithEmailAndPassword Function
    signInWithEmailAndPassword(auth, Email_Id.value, Password.value)
    .then((userCredential) => {
    // Signed in 
    alert(userCredential.user.email +" Logged In Successfully");
    sessionStorage.setItem("stu-user-creds", JSON.stringify(userCredential.user));
    window.location.href="UserIndexPage.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Login Unsuccessfull error code:"+ errorCode +" error message"+ errorMessage);
    window.location.reload();
  });
    }
    else{
      alert("Login Unsuccessfull, mentioned emailid is not a valid user");
      window.location.reload();
    }
  }

 //assigning the action listiner for fetching the function
 Login_Submit.addEventListener("click", LoginValidation)
    