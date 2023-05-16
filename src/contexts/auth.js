import React, { useState, createContext, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [userFavorites, setUserFavorites] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();


    useEffect(() => {
        async function loadStorage() {
            try {
                const data = await AsyncStorage.getItem('@user')
                data !== null && setUser(JSON.parse(data));
            }
            catch (err) {
                console.log(err)
            }
        }
        loadStorage();
    }, [])

    useEffect(() => { 
        if (user !== null) {
            getFavorites();
        }
    }, [])

    async function getFavorites() {
        let list = [];
        uid = auth().currentUser.uid
        const docRef = firestore().collection('USERS').doc(uid).collection('FAVORITES');
        await docRef.get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    list.push(doc.data())
                })
                setUserFavorites(list);
                storageFavorites(list);
            })
    }

    useEffect(() => {
        async function loadFavorites() {
            try {
                const data = await AsyncStorage.getItem('@FAVORITES')
                data !== null && setUserFavorites(JSON.parse(data));
            }
            catch (err) {
                console.log(err)
            }
        }
        loadFavorites();
    }, [])


    async function storageFavorites(data) {
        try {
            const jsonData = JSON.stringify(data);
            await AsyncStorage.setItem('@FAVORITES', jsonData)

        } catch (error) {
            console.log(error);
        }
    }

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
                await firestore().collection('USERS').doc(uid).set({})
                    .then(() => {
                        let data = {
                            uid: uid,
                            name: name,
                            email: userCredential.user.email,
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
                let data = {
                    uid: uid,
                    name: userCredential.user.displayName,
                    email: userCredential.user.email,
                }
                storageUser(data);
                setUser(data);
            })
            .catch((error) => {
                console.log(error);
            })
            getFavorites();

        setLoading(false);
    }
    async function editUser(name) {
        const userCredential = auth().currentUser;
        if (userCredential.displayName === name) return;;
        setLoading(true);
        await auth().currentUser.updateProfile({ displayName: name })
            .then(async () => {
                const userName = auth().currentUser.displayName;
                let data = {
                    uid: userCredential.uid,
                    name: userName,
                    email: userCredential.email,
                }
                setUser(data);
                storageUser(data);
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
        setLoading(true);
        await auth().signOut()
            .then(() => {
                AsyncStorage.clear();
                setUserFavorites([]);
                setUser(null);
            })
        setLoading(false);
    }
    async function addToFavorites(data) {
        if (user === null) { return navigation.navigate('SignIn') }

        const dataId = String(data.id);
        const uid = auth().currentUser.uid;

        const favorite = data;

        const docRef = firestore().collection('USERS').doc(uid).collection('FAVORITES').doc(dataId);

        if (((await docRef.get()).exists)) {
            await docRef.delete()
                .then(() => {
                    if (user != null) {
                        let arrayData = userFavorites.filter((item) => {
                            String(item.id) != dataId
                        })
                        storageFavorites(arrayData);
                        setUserFavorites(arrayData);
                    }
                    getFavorites()
                })
        } else {
            await docRef.set(favorite)
                .then(() => {
                    let arrayData = [...userFavorites]
                    if (user != null) {
                        arrayData.push(favorite);
                    }
                    storageFavorites(arrayData);
                    setUserFavorites(arrayData);
                });
        }

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
            editUser,
            addToFavorites,
            userFavorites,

        }}>
            {children}
        </AuthContext.Provider>
    )
}