
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, update } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile
} from "firebase/auth";

import Notiflix from "notiflix";

import { headerUserBtnAuthHandler, headerUserBtnLogOutHandler } from './header-auth-handler.js'


const firebaseConfig = {
  apiKey: 'AIzaSyA-_OfsYzJ0IruGwuB0MjrKn8CM_GP4gaw',
  authDomain: 'jssf-bookstore.firebaseapp.com',
  databaseURL: 'https://jssf-bookstore-default-rtdb.firebaseio.com',
  projectId: 'jssf-bookstore',
  storageBucket: 'jssf-bookstore.appspot.com',
  messagingSenderId: '159533621369',
  appId: '1:159533621369:web:49b6ecc78de1b0dd90f4a8',
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

submitBtn.addEventListener("click", e => {
  const nameAuth = document.getElementById("nameAuth").value;
  const mailAuth = document.getElementById("signupMail").value;
  const userPassword = document.getElementById("signupPassword").value;
  const nameInput = form.querySelector('.auth_field[type="text"]');

  

  createUserWithEmailAndPassword(auth, mailAuth, userPassword)
    .then(userCredential => {
      
      const user = userCredential.user;

      set(ref(database, "users/" + user.uid), {
        nameAuth: nameAuth,
        mailAuth: mailAuth,
        userPassword: userPassword,
      });
      Notiflix.Notify.success("user created!");

     const displayName = '';
     const name = nameInput.value;
     console.log(name);

      updateProfile(user, {
        displayName: name,
      });

      console.log(displayName);
      console.log(user);
      console.log(database);
      //saveUserLocalStorage(user);

      headerUserBtnAuthHandler();
      headerUserBtnLogOutHandler();

    document.getElementById("authModal").style.display = "none";
    document.getElementById("mobileMenu").style.display = "inline";
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Notiflix.Notify.success(errorMessage);
      
    });
    
});

submitBtnCopy.addEventListener("click", e => {
  
  const mailAuth = document.getElementById("signinMail").value;
  const userPassword = document.getElementById("signinPassword").value;

  signInWithEmailAndPassword(auth, mailAuth, userPassword)
    .then(userCredential => {
     
      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: dt,
      });

      Notiflix.Notify.success("User longed in!");
      //saveUserLocalStorage(user);

      headerUserBtnAuthHandler();
      headerUserBtnLogOutHandler();

      document.getElementById("authModal").style.display = "none";
      document.getElementById("mobileMenu").style.display = "inline";
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Notiflix.Notify.success(errorMessage);
    });
    
});

// function saveUserLocalStorage(user, name) {
//   const userData = { ...user, displayName: name };
//   localStorage.setItem('user', JSON.stringify(userData));
// }

// function removeUserLocalStorage() {
//   localStorage.removeItem('user');
// }

logOut.addEventListener('click',(e) =>{
signOut(auth).then(() => {
  const user = userCredential.user;
  Notiflix.Notify.success('Sign-out successful')
  removeUserLocalStorage(user);
}).catch((error) => {
  
  const errorCode = error.code;
    const errorMessage = error.message;

    Notiflix.Notify.success(errorMessage);
});
});




// function updateSignUpBtn() {
//   const user = auth.currentUser;
//   const singUpBtn = document.querySelector('.user');
//   const userData = JSON.parse(localStorage.getItem('user'));
//   if (user || userData) {
//     const nameAuth = user?.displayName || userData?.displayName;
//     singUpBtn.textContent = nameAuth ?? 'Sign Up';
//     document.querySelector('.user-log-out').style.display = 'flex'; // Показываем кнопку log out, если пользователь авторизован
//   } else {
//     singUpBtn.textContent = 'Sign Up';
//     document.querySelector('.user-log-out').style.display = 'none'; // Скрываем кнопку log out, если пользователь не авторизован
//   }
// }
