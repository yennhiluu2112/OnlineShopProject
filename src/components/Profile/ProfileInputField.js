import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/Feather'
import Colors from '../../assets/colors'
import { HEIGHT_SCREEN } from '../../ultilities/Constant'
export default function ProfileInputField(props) {
    const {label,value, ...rest } = props
    return (
        <View style={styles.container}>
            <Text style={styles.textEmail}>{label}</Text>
            <TextInput
                value={value}
                placeholder='Input here...' 
                style={styles.inputEmail}
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 20,

    },
    inputEmail:{
        marginTop: 15,
        height: HEIGHT_SCREEN*0.07,
        borderRadius: 15,
        borderWidth: 0.5,
        paddingHorizontal: 10,
        backgroundColor: '#fafcfe',
        color: 'black',
        fontSize: 15
    },
    textEmail:{
        color: 'black',
        fontWeight: '700',
        fontSize: 17
    }
})