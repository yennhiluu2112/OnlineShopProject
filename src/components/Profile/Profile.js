import React, {useContext, useEffect, useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { WIDTH_SCREEN, HEIGHT_SCREEN } from '../../ultilities/Constant'
import ProfileInputField from './ProfileInputField'
import { AuthContext } from '../../auth/AuthProvider'
import Colors from '../../assets/colors'

function Profile() {
    const { user, update, readData, logout } = useContext(AuthContext);
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    useEffect(()=>{
        setEmail(user.email)
        setPhone(readData().phone)
        setName(readData().name)
        setAddress(readData().address)

    },[])


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <ProfileInputField value={email} label={'Email'} onChangeText={text=>setEmail(text)}/>
                <ProfileInputField value={name} label={'Name'} onChangeText={text=>setName(text)}/>
                <ProfileInputField value={phone} label={'Phone'} onChangeText={text=>setPhone(text)}/>
                <ProfileInputField value={address} label={'Address'} onChangeText={text=>setAddress(text)}/>


                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity 
                        style={styles.touchable}
                        onPress={()=>{
                            update(name, address, phone)
                        }}>
                        <Text style={styles.touchableText}>SUBMIT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.touchable}
                        onPress={()=>{
                            logout()
                        }}>
                        <Text style={styles.touchableText}>LOG OUT</Text>
                    </TouchableOpacity>

                </View>

                

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
        marginHorizontal: 10
    },
    touchableText:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17
    }
    
})

export default Profile