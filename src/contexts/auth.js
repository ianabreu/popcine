import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();


    useEffect(() => {
        async function loadStorage() {
            try {
                const data = await AsyncStorage.getItem('@user')
                data !== null && setUser(JSON.parse(data));
              } 
              catch(err) {
                console.log(err)
              }
        }
        loadStorage();
    })

    async function hasUser() {
        if (auth().currentUser) {
            navigation.navigate('Profile')
        } else {
            navigation.navigate('SignIn')
        }
    }

    async function signUp(name, email, password) {
        setLoading(true);

        await auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (userCredential) => {
                const update = {
                    displayName: name,
                };
                await auth().currentUser.updateProfile(update);

                let uid = userCredential.user.uid
                await firestore().collection('users').doc(uid).set({
                    name: name,
                    favorites: [],
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            name: name,
                            email: userCredential.user.email,
                            favorites: [],
                        }
                        storageUser(data);
                        setUser(data);
                    })
                    .catch((error) => {
                        console.log(error);
                    })

            })
            .catch((error) => {
                console.log(error);
            })
        setLoading(false);
    }

    async function signIn(email, password) {
        setLoading(true);

        await auth()
            .signInWithEmailAndPassword(email, password)
            .then(async (userCredential) => {
                let uid = userCredential.user.uid
                const userData = await firestore().collection('users').doc(uid).get();
                
                let data = {
                    uid: uid,
                    name: userData.data().name,
                    email: userCredential.user.email,
                    favorites: userData.data().favorites
                }
                storageUser(data);
                setUser(data);
            })
            .catch((error) => {
                console.log(error);
            })

        setLoading(false);
    }

    async function storageUser(data) {
        try {
            const jsonData = JSON.stringify(data);
            await AsyncStorage.setItem('@user', jsonData)
            
        } catch (error) {
            console.log(error);
        }
    }
    async function signOut() {
        await auth().signOut()
        .then(() => {
            AsyncStorage.clear();
            setUser(null);
        })        
    }


    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            loading,
            signUp,
            signIn,
            signOut,
            hasUser,

        }}>
            {children}
        </AuthContext.Provider>
    )
}