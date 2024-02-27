// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

const logout = document.getElementById("logout")
logout.addEventListener("click", function(event){
      event.preventDefault()

      signOut(auth).then(() => {
        sessionStorage.removeItem("stu-user-info");
        sessionStorage.removeItem("stu-user-creds");
        window.location.href="HomePage.html"
    }).catch((error) => {
        alert(errorMessage)
      // An error happened.
    });
})
