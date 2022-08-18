import React, { useState,useEffect } from 'react'
import { 
    View, 
    Text , 
    Image, 
    StyleSheet, 
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native'
import Colors from '../assets/colors'
import Icon from 'react-native-vector-icons/Feather'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import { CustomButton, InputField } from '../components'
import {
    auth,
    onAuthStateChanged,
    signInWithEmailAndPassword
  } from '../firebase/firebase'
function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user){
                const userId = user.uid
                navigation.navigate('Home')
            }
        })
    },[])
    return (
    <SafeAreaView style={styles.container}>
        <View>
            <Image 
                style={styles.login_image} 
                source={require('../assets/images/login_image.png')}
            />
            <Text style={styles.text1}>Login</Text>
            <InputField 
              label={'Email'}  
              inputType={'email'}
              onChangeText={text => setEmail(text)}
              value={email}
              icon={<Icon 
                    name='mail'
                    size={22} 
                    color={Colors.blue}
                    style={styles.emailIcon}
              keyboardType={'email-address'}
                />}
            />

            <InputField 
              label={'Password'}
              inputType={'password'}  
              onChangeText = {text=>setPassword(text)}
              value={password}
              icon={<Icon 
                    name='lock'
                    size={22} 
                    color={Colors.blue}
                    style={styles.emailIcon}
                />}
            fieldButtonLabel={'Forgot'}
            />
    
            <CustomButton 
                label={'Login'}
                onPress={()=>{
                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                        })
                        .catch((error) => {
                            alert(`Error Login: ${error.message}`);
                        })
                    
                    setEmail('')
                    setPassword('')
                }}
            />

            <Text style={styles.orText}>Or, login with</Text>

            <View style={styles.otherView}>
                <TouchableOpacity style={styles.googleButton}>
                    <FontAwesomeIcon name='google' size={24} color={'red'}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.googleButton}>
                    <FontAwesomeIcon name='facebook' size={25} color={Colors.blue}/>
                </TouchableOpacity>
            </View>

            <View style={styles.registerView}>
                <Text style={{fontSize: 14}}>New to the app?</Text>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Signup')}>
                    <Text style={styles.signUpText}>Register</Text>
                </TouchableOpacity>
            </View>

            
            
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    login_image:{
        height: 230,
        width: 350,
        resizeMode: 'contain'
        //transform: [{rotate: '-5deg'}]
    },
    text1:{
        fontSize: 28,
        fontWeight: '500',
        color: Colors.blue,
        marginTop: 20,
        marginBottom: 25,
    },
    emailView:{
        flexDirection: 'row',
        borderBottomColor: Colors.gray,
        borderBottomWidth:1,
        paddingBottom: 2,
        alignItems: 'center',
        marginBottom: 25
    },
    emailIcon:{
        marginEnd: 5
    },
    inputEmail:{
        flex:1,
        paddingVertical: 5,
        fontSize: 15
    },
    forgotText:{
        color: Colors.blue,
        fontWeight: '700'
    },
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
    orText:{
        textAlign: 'center',
        marginBottom: 30
    },
    otherView:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30
    },
    googleButton:{
        borderColor: Colors.darkGray,
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginHorizontal: 10,
    },
    signUpText:{
        color: Colors.blue,
        fontWeight: '700',
        marginStart: 5,
        fontSize: 14
    },
    registerView:{
        flexDirection: 'row',
        justifyContent: 'center',
        
    }
})

export default LoginScreen