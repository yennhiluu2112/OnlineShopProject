import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
    LoginScreen, 
    RegisterScreen, 
    HomeScreen,
    SplashScreen
} from '../screens'; 

const Stack = createNativeStackNavigator();

export default function AuthStack(){
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}