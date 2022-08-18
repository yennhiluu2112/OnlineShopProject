import React, { createContext, useState } from 'react';
import {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
  } from '../firebase/firebase'

const AuthContext = createContext({});
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async(email, password) => {
                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            setUser(user)
                        })
                        .catch((error) => {
                            alert(`Error Login: ${error.message}`);
                        })
                },

                signup: async (email, password) => {
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((useCredential) => {
                            const user = useCredential.user
                            setUser(user)
                            alert('Successfully registered')
                        })
                        .catch((error) => {
                            alert(`Cannot sign up, error ${error.message} Email: ${email}`)
                        })
                },

                logout: async () => {
                    signOut(auth)
                        .then(() => {
                        // Sign-out successful.
                            setUser(null)
                        })
                        .catch((error) => {
                        // An error happened.
                        alert("Error signOut")
                        });
                }
                
            }}>
            {children}

        </AuthContext.Provider>
    )
}

export {
    AuthProvider,
    AuthContext
}