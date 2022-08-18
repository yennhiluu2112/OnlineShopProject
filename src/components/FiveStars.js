import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

function FiveStars(props){
    const {numberOfStars} = props
    return <View style={{flexDirection: 'row', marginTop: 5}}>
        { [0,1,2,3,4].map(item =>
        <Icon
            name='star'
            style={{marginEnd: 5}}
            size = {15} 
            color= {item <= numberOfStars-1 ? 'yellow' : 'white'}
            />
        )}
    </View>
}

export default FiveStars