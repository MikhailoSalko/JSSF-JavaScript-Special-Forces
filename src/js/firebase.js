import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, update } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import Notiflix from "notiflix";

import {
  headerUserBtnAuthHandler,
  headerUserBtnLogOutHandler,
} from "./header-auth-handler.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-_OfsYzJ0IruGwuB0MjrKn8CM_GP4gaw",
  authDomain: "jssf-bookstore.firebaseapp.com",
  databaseURL: "https://jssf-bookstore-default-rtdb.firebaseio.com",
  projectId: "jssf-bookstore",
  storageBucket: "jssf-bookstore.appspot.com",
  messagingSenderId: "159533621369",
  appId: "1:159533621369:web:49b6ecc78de1b0dd90f4a8",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
let user;

submitBtn.addEventListener("click", e => {
  const nameAuth = document.getElementById("nameAuth").value;
  const mailAuth = document.getElementById("signupMail").value;
  const userPassword = document.getElementById("signupPassword").value;
  const nameInput = form.querySelector('.auth_field[type="text"]');

  createUserWithEmailAndPassword(auth, mailAuth, userPassword)
    .then(userCredential => {
      user = userCredential.user;

      set(ref(database, "users/" + user.uid), {
        nameAuth: nameAuth,
        mailAuth: mailAuth,
        userPassword: userPassword,
      });
      Notiflix.Notify.success("user created!");

      const displayName = "";
      const name = nameInput.value;
      
      updateProfile(user, {
        displayName: name,
      });

      headerUserBtnAuthHandler("user.displayName");
      
      document.getElementById("authModal").style.display = "none";
      document.getElementById("mobileMenu").style.display = "inline";
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Notiflix.Notify.failure(errorMessage);
    });
});

submitBtnCopy.addEventListener("click", e => {
  const mailAuth = document.getElementById("signinMail").value;
  const userPassword = document.getElementById("signinPassword").value;

  signInWithEmailAndPassword(auth, mailAuth, userPassword)
    .then(userCredential => {
      user = userCredential.user;

      const dt = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: dt,
      });

      Notiflix.Notify.success("User long in!");
     
      headerUserBtnAuthHandler(user.displayName);
    
      document.getElementById("authModal").style.display = "none";
      document.getElementById("mobileMenu").style.display = "inline";
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
console.log(error);
      Notiflix.Notify.failure(errorMessage);
    });
});

logOut.addEventListener("click", e => {
  signOut(auth)
    .then(() => {
      
      Notiflix.Notify.success("Sign-out successful");
    
      headerUserBtnLogOutHandler();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Notiflix.Notify.failure(errorMessage);
    });
});


// logOutMobMenu.addEventListener("click", e => {
//   signOut(auth)
//     .then(() => {
      
//       Notiflix.Notify.success("Sign-out successful");
    
//       headerUserBtnLogOutHandler();
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;

//       Notiflix.Notify.failure(errorMessage);
//     });
// });

