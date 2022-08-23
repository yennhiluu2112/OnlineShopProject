import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PlaceOrderScreen, CartScreen } from '../screens';

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='Cart' component={CartScreen}/>
            <Stack.Screen name='PlaceOrder' component={PlaceOrderScreen}/>
        </Stack.Navigator>
    )
}

export default CartStack