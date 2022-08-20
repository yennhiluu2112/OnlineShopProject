import React, {useState} from "react";
import { StyleSheet, View, Text  } from 'react-native'
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import { WIDTH_SCREEN, HEIGHT_SCREEN } from "../../ultilities/Constant";
import Profile from "./Profile";
import Orders from "./Orders";
import Colors from "../../assets/colors";
const renderScene = SceneMap({
    first: Profile,
    second: Orders
})

export default function ProfileTabs(){
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        {
            key:"first",title:"PROFILE"
        },
        {
            key:"second",title:"ORDERS"
        },
    ])

    const renderTabsBar = (props)=>(
        <TabBar 
            {...props} 
            tabStyle={styles.tabStyle} 
            indicatorStyle={{backgroundColor: 'black'}}
            activeColor = {'black'}
            inactiveColor = {Colors.white}
            renderLabel={({route, color})=>{
                <Text style={{color, ...styles.text}}>{route.title}</Text>
            }}
        />
    )

    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabsBar={renderTabsBar}
            onIndexChange={setIndex}
            initialLayout = {{WIDTH_SCREEN}} 
        />
    )
}

const styles = StyleSheet.create({
    tabStyle:{
        backgroundColor: 'black'
    },
    text:{
        fontSize: 13,
        fontWeight: 'bold'
    }
})
