import React, {useContext, useEffect, useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { WIDTH_SCREEN, HEIGHT_SCREEN } from '../../ultilities/Constant'
import ProfileInputField from './ProfileInputField'
import { AuthContext } from '../../auth/AuthProvider'
import Colors from '../../assets/colors'
function Profile() {
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(()=>{
        setEmail(user.email)
    },[])


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <ProfileInputField value={email} label={'Email'} onChangeText={text=>setEmail(text)}/>
                <ProfileInputField value={name} label={'Name'} onChangeText={text=>setName(text)}/>
                <ProfileInputField value={phone} label={'Phone'} onChangeText={text=>setPhone(text)}/>

                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.touchableText}>SUBMIT</Text>
                </TouchableOpacity>

            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 30,
        marginTop: 30
    },
    touchable:{
        backgroundColor: Colors.blue,
        height: HEIGHT_SCREEN*0.06,
        width: WIDTH_SCREEN*0.4,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableText:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17
    }
    
})

export default Profile