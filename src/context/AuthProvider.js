import React, {createContext, useEffect, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const  AuthContext = createContext();
const auth = getAuth(app);

 
/* 
    [+] Create a Context with createContext
    [+] Create AuthContext.Provider Component and pass a state with value name
    [+] that value can pass any type of vlalue to its children 
    [+] I pass a object thats contain many thing as a object
    [+] import getAuth to create a auth and pass auth into getauth parameter

*/

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            // console.log(user, 'from onAuthStateChanged') 
            setLoading(false)         
        })
        return ()=> unsubscribe();
    },[])

    const authInfo = {
        user,
        createUser,
        updateUser,
        logIn,
        logOut,
        loading 
    }

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;