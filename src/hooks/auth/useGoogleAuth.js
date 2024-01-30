import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function useGoogleAuth() {
    const { currentUser, signInWithGoogle, signOut, error, clearError } = useAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [currentUser]);

    const handleGoogleSignIn = async () => {
        clearError();
        try {
            await signInWithGoogle();
            navigate("/");

        } catch (error) {
            console.error("Google sign-in error:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut();
            navigate('/')
        } catch (error) {
            console.error("Sign out error:", error);
        }
    };

    return {
        isAuthenticated,
        currentUser,
        handleGoogleSignIn,
        handleSignOut,
        error,
    };
}

export default useGoogleAuth;
