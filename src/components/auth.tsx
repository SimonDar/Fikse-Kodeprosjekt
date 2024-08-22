import React from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import {auth, googleProvider} from '../assets/firebase';

const Auth = () => {
    console.log(auth.currentUser?.email);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const signIn = async () => {
        try {
            if (!email || !password) {
                console.error("Email or password is not defined");
                return;
            }
            console.log(email, password);
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User created successfully");
        } catch (error) { //Ser error hvis feil 
            console.error("Error creating user:", error);
        }
        console.log(auth.currentUser?.email);
    };

    const loggout = async () => {  
        try {
            await auth.signOut();
            console.log("User signed out");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    }

    const signeInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(getAuth(), googleProvider);
            console.log(result);
        } catch (error) {
            console.error("Error signing in with google:", error);
        }
    };

    return (
        
        <div className="p-4">
            <input 
                placeholder="Email..." 
                onChange={(e) => setEmail(e.target.value)} 
                className="mb-4 p-2 border border-gray-300 rounded mx-2"
            />
            <input 
                placeholder="Password..." 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                className="mb-4 p-2 border border-gray-300 rounded mx-2"
            />
            <button 
                onClick={signIn} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded mb-4"
            >
                Login
            </button>
            <button 
                onClick={signeInWithGoogle} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 mx-2 border border-gray-3000"
            >
                Sign in with Google
            </button>
            <button 
                onClick={loggout} 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-2 px-4 rounded"
            >
                Logout
            </button>
        </div>
    );
}

export default Auth;