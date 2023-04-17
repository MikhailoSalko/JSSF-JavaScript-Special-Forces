// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, update } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

// import Notiflix from 'notiflix';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-_OfsYzJ0IruGwuB0MjrKn8CM_GP4gaw',
  authDomain: 'jssf-bookstore.firebaseapp.com',
  databaseURL: 'https://jssf-bookstore-default-rtdb.firebaseio.com',
  projectId: 'jssf-bookstore',
  storageBucket: 'jssf-bookstore.appspot.com',
  messagingSenderId: '159533621369',
  appId: '1:159533621369:web:49b6ecc78de1b0dd90f4a8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

console.log(app);
console.log(database);
console.log(auth);

signinBtn.addEventListener('click', e => {
  const nameAuth = document.getElementById('name-auth').value;
  const mailAuth = document.getElementById('mail-auth').value;
  const userPassword = document.getElementById('userPassword').value;

  createUserWithEmailAndPassword(auth, mailAuth, userPassword)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        nameAuth: nameAuth,
        mailAuth: mailAuth,
      });
      Notiflix.Notify.success('user created!');
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Notiflix.Notify.success(errorMessage);
      // ..
    });
});

signupBtn.addEventListener('click', e => {
  const nameAuth = document.getElementById('name-auth').value;
  const mailAuth = document.getElementById('mail-auth').value;
  const userPassword = document.getElementById('userPassword').value;

  signInWithEmailAndPassword(auth, mailAuth, userPassword)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, 'users/' + user.uid), {
        last_login: dt,
      });

      Notiflix.Notify.success('User longed in!');
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      Notiflix.Notify.success(errorMessage);
    });
});

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });

// updateProfile(auth.currentUser, {
//     displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
//   }).then(() => {
//     // Profile updated!
//     // ...
//   }).catch((error) => {
//     // An error occurred
//     // ...
//   });
