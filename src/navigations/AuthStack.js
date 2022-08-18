import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
    LoginScreen, 
    RegisterScreen, 
    HomeScreen
} from '../screens'; 

const Stack = createNativeStackNavigator();

export default function AuthStack(){
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}