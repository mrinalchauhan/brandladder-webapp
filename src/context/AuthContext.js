import React, { useContext, useState, useEffect } from "react";

import { auth } from "../config/firebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signOut,
    signInWithPopup
} from 'firebase/auth';
import "firebase/app";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const clearError = () => setError(null);

    // create new user
    const signUp = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);

        } catch (error) {
            setError(error.message);
        }
    };

    // email signin
    const signIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            clearError();
        } catch (error) {
            setError(error.message);
        }
    };

    // google signin
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            clearError();
        } catch (error) {
            setError(error.message);
        }
    };

    // github signin
    const signInWithGitHub = async () => {
        const provider = new GithubAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            clearError();
        } catch (error) {
            setError(error.message);
        }
    };

    // signout
    const signOutUser = async () => {
        try {
            await signOut(auth);
            clearError();

        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);


    const value = {
        currentUser,
        signUp,
        signIn,
        signInWithGoogle,
        signInWithGitHub,
        signOut: signOutUser,
        error,
        clearError,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
