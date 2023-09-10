import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {signInWithPopup ,GoogleAuthProvider} from "firebase/auth";

import { auth } from "../firebaseConfig"


// const auth = getAuth(app)
export const loginUser = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        return response;
    } catch (error) {
        return error
    }
};
export const RigisterUser = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        return response;
    } catch (error) {
        return error
    }
};

const provider=new GoogleAuthProvider()

export const siginPopup = async ()=>{
    try {
        const response = await signInWithPopup(auth,provider);
        return response
    } catch (error) {
        return error;
    }
}

// const authDomain=