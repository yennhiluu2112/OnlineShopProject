import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Colors from '../assets/colors'

function ShippingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Delivery</Text>
      </View>
      <View style={styles.content}>
        

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 100,
    backgroundColor: 'white',
  },
  header:{
    flex: 6,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18

  },
  content:{
    flex: 94
  }
})

export default ShippingScreen