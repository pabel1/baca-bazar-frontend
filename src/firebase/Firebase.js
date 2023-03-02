import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMQRP_S3fUBF8XnqEqgebgU2Lx7dC2Psw",
  authDomain: "krishan-bazar-6965c.firebaseapp.com",
  projectId: "krishan-bazar-6965c",
  storageBucket: "krishan-bazar-6965c.appspot.com",
  messagingSenderId: "930669430339",
  appId: "1:930669430339:web:f6feb2d28b1b3be34336f6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, googleProvider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export const signInWithFacebook = () => {
//   signInWithPopup(auth, facebookProvider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
