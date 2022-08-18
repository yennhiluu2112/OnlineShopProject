import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { auth, signOut } from '../firebase/firebase';

function HomeScreen({navigation}) {
  return (
    <View>
        <Text>HomeScreen</Text>
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Login')
            signOut(auth).then(() => {
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
              alert("Error signOut")
            });
          }}>
          <Text>Log Out</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen