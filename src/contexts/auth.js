import React, { useState, createContext, useEffect } from "react";

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    function signUp(name, email, password) {
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {

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