import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import TabNav from './TabNav';
export default function Routes() {
    // useEffect(()=>{
    //     setTimeout(()=>{
    //       onAuthStateChanged(auth, (user) => {
    //         if (user){
    //             const userId = user.uid
    //         }
    //         else{
    //         }
    //     })
    //     },2000)
    // },[])
    return (
        <NavigationContainer>
            {1 ? <TabNav/> : <AuthStack/>}
        </NavigationContainer>
    )
}