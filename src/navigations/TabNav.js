import React from 'react'
import { 
    HomeScreen,
    CartScreen,
    ProfileScreen 
} from '../screens'
import CartStack from './CartStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../assets/colors'
import Icon from 'react-native-vector-icons/Feather'
import HomeStack from './HomeStack'
const Tab = createBottomTabNavigator()
function TabNav(props){
    return (
    <Tab.Navigator
        initialRouteName='HomePage'
        screenOptions={({route})=> ({
            headerShown: false,
            tabBarIcon: ({focused, iconColor, iconName})=>{
                if (route.name === 'HomePage'){
                    iconColor = focused ? Colors.blue : 'black'
                    iconName = 'home'
                } else if (route.name === 'Cart'){
                    iconColor = focused ? Colors.blue : 'black'
                    iconName = 'shopping-cart'
                } else if (route.name === 'Profile'){
                    iconColor = focused ? Colors.blue : 'black'
                    iconName = 'user'
                }
                return <Icon name={iconName} size={25} color={iconColor} />
            },
        })}
        >
        <Tab.Screen 
            name={'HomePage'} 
            component={HomeStack}
            options={{
                tabBarLabel: 'Home',
                tabBarLabelStyle: {
                    fontSize: 12,
                }   
            }}
            />
        <Tab.Screen 
            name={'CartStack'} 
            component={CartStack}
            options={{
                tabBarLabel: 'Cart',
                tabBarLabelStyle: {
                    fontSize: 12
                }
            }}
        />
        <Tab.Screen 
            name={'Profile'} 
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarLabelStyle: {
                    fontSize: 12
                }
            }}
        />

    </Tab.Navigator>
    )

} 
export default TabNav