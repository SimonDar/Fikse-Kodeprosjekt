import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, signOut, User } from 'firebase/auth';
import { auth, googleProvider } from '../assets/firebase';

const Auth: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    // Monitor the authentication state
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        // Cleanup the subscription on component unmount
        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(getAuth(), googleProvider);
            console.log("User signed in with Google:", result.user.email);
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("User signed out");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div>
            {user ? (
                <button 
                    onClick={logout} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-4 mx-12 mt-4"
                >
                    Logout
                </button>
            ) : (
                <button 
                    onClick={signInWithGoogle} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-4 mx-1 mt-4"
                >
                    Sign in with Google
                </button>
            )}
        </div>
    );
};

export default Auth;
