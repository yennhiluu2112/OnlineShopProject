import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import TabNav from './TabNav';
import { auth, onAuthStateChanged } from '../firebase/firebase';
import { AuthContext } from '../auth/AuthProvider';
export default function Routes() {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    onAuthStateChanged(auth, (user) => {
        if (user){
            setUser(user);
            if (initializing) setInitializing(false);
        }
    })

    useEffect(()=>{
        // const subscriber = onAuthStateChanged(auth,onAuthStateChanged);
        // return subscriber; 
    }, [])

    //if (initializing) return null;
    
    return (
        <NavigationContainer>
            {user ? <TabNav/> : <AuthStack/>}
        </NavigationContainer>
    )
}