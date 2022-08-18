import React from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import Colors from '../assets/colors'
import { WIDTH_SCREEN, HEIGHT_SCREEN } from '../ultilities/Constant'

function SplashScreen({navigation}) {

 

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View style={styles.bottomView}>
        <ActivityIndicator size="large" color="black"/>
      </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  topView:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 90
  },
  bottomView:{
    flex: 10
  },
  logo:{
    width: HEIGHT_SCREEN*0.14,
    height: HEIGHT_SCREEN*0.14,
    resizeMode: 'contain',
  },
  title:{
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    marginTop:10
  }
})

export default SplashScreen