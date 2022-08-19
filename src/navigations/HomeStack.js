import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SingleProductScreen } from '../screens';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='SingleProduct' component={SingleProductScreen}/>
        </Stack.Navigator>
    )
}

export default HomeStack