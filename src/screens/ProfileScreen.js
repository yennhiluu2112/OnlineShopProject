import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Colors from '../assets/colors'
import Icon from 'react-native-vector-icons/Feather'
import ProfileTabs from '../components/Profile/ProfileTabs'
function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topView}>
          <Icon name="user" size={80} color={Colors.blue}/>
          <Text style={styles.text}>User</Text>
        </View>
        <View style={styles.bottomView}>
          <ProfileTabs/>


        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 100,
  },
  topView:{
    flex: 25,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView:{
    flex: 70
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.blue
  }
})

export default ProfileScreen