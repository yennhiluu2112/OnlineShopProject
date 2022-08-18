import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Icon } from 'react-native-vector-icons/Feather'
import Colors from '../assets/colors'
export default function InputField(props) {
    const {value, label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction, ...rest} = props
    return (
    
        <View style={styles.emailView}>
            {icon}
            <TextInput
                placeholder={label}
                style={styles.inputEmail}
                keyboardType={keyboardType}
                secureTextEntry={inputType == 'password' ? true : false}
                {...rest}
            />
            <TouchableOpacity
                onPress={fieldButtonFunction}
            >
                <Text style={styles.forgotText}>
                    {fieldButtonLabel}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputEmail:{
        flex:1,
        paddingVertical: 5,
        fontSize: 15
    },
    forgotText:{
        color: Colors.blue,
        fontWeight: '700'
    },
    emailView:{
        flexDirection: 'row',
        borderBottomColor: Colors.gray,
        borderBottomWidth:1,
        paddingBottom: 2,
        alignItems: 'center',
        marginBottom: 25
    },
})