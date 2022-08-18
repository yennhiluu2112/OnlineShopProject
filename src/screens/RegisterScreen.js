import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  Text,
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
  createUserWithEmailAndPassword,
} from '../firebase/firebase'
import { AuthContext } from '../auth/AuthProvider'
function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup } = useContext(AuthContext);

  // const createUser = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((useCredential) => {
  //       const user = useCredential.user
  //       alert('Successfully registered')
  //     })
  //     .catch((error) => {
  //       alert(`Cannot sign up, error ${error.message} Email: ${email}`)
  //     })

  //   setEmail('')
  //   setPassword('')

  // }

  useEffect(() => {
    debugger
  })

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.login_image}
          source={require('../assets/images/register_image.png')}
        />
        <Text style={styles.text1}>Register</Text>

        <InputField //ni la component
          label={'Email'}
          inputType={'email'}
          icon={<Icon
            name='mail'
            size={22}
            color={Colors.blue}
            style={styles.emailIcon}
            keyboardType={'email-address'}
          />}
          onChangeText={text => setEmail(text)} 

        />
        <InputField
          value={password}
          label={'Password'}
          inputType={'password'}
          onChangeText={text => setPassword(text)}
          icon={<Icon
            name='lock'
            size={22}
            color={Colors.blue}
            style={styles.emailIcon}
          />}
        />
        <InputField
          label={'Confirm Password'}
          inputType={'password'}
          onChangeText={() => { }}
          icon={<Icon
            name='lock'
            size={22}
            color={Colors.blue}
            style={styles.emailIcon}
          />}
        />
        <CustomButton
          label={'Register'}
          onPress={()=>signup(email,password)} 
        />


        <View style={styles.registerView}>
          <Text style={{ fontSize: 15 }}>Already Register?</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Text style={styles.signUpText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login_image: {
    height: 230,
    width: 350,
    resizeMode: 'contain'
    //transform: [{rotate: '-5deg'}]
  },
  text1: {
    fontSize: 28,
    fontWeight: '500',
    color: Colors.blue,
    marginTop: 20,
    marginBottom: 25,
  },
  emailIcon: {
    marginEnd: 5
  },

  orText: {
    textAlign: 'center',
    marginBottom: 30
  },
  otherView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  googleButton: {
    borderColor: Colors.gray,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  signUpText: {
    color: Colors.blue,
    fontWeight: '700',
    marginStart: 5,
    fontSize: 15
  },
  registerView: {
    flexDirection: 'row',
    justifyContent: 'center',

  }
})

export default RegisterScreen