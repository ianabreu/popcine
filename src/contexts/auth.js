import React, { useState, createContext, useEffect } from "react";

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    async function signUp(name, email, password) {
        await auth()
            .createUserWithEmailAndPassword(email, password)
            .then( async (userCredential) => {
                let uid = userCredential.user.uid
                await firestore().collection('users').doc(uid).set({
                    name: name,
                    favorites: [],
                })
                .then(() => {
                    let data = {
                        uid: uid,
                        name: name,
                        email: userCredential.user.email
                    }
                    setUser(data);
                }).catch((error)=> {
                    console.log(error);
                }) 

            })
            .catch((error) => {
                console.log(error);
            })

    }
    return (
        <AuthContext.Provider value={{
            signUp,
            
            }}>
            {children}
        </AuthContext.Provider>
    )
}