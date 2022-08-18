import React from 'react'
import { 
    HomeScreen,
    CartScreen,
    ProfileScreen 
} from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../assets/colors'
import Icon from 'react-native-vector-icons/Feather'
const Tab = createBottomTabNavigator()
function TabNav(props){
    return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({route})=> ({
            headerShown: false,
            tabBarIcon: ({focused, iconColor, iconName})=>{
                if (route.name === 'Home'){
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
            name={'Home'} 
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarLabelStyle: {
                    fontSize: 12,
                }   
            }}
            />
        <Tab.Screen 
            name={'Cart'} 
            component={CartScreen}
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