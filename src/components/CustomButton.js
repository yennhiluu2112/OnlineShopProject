import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Icon } from 'react-native-vector-icons/Feather'
import Colors from '../assets/colors'
export default function CustomButton(props) {
    const {label, onPress} = props
    return (
        <TouchableOpacity 
            style={styles.loginButton}
            onPress={onPress}>
                <Text style={styles.loginText}>{label}</Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    loginButton:{
        backgroundColor: Colors.blue,
        padding: 15,
        borderRadius: 20,
        marginBottom: 30
    },
    loginText:{
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        color: Colors.white,
    },
})
