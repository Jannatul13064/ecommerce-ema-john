import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;



//Steps of Firebase Authentication
/*
Step1:
Initial Setup
1.Firebase : create project
2.

*/