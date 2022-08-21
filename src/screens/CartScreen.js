import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Colors from '../assets/colors'
import CartItem from '../components/CartItem'
import { HEIGHT_SCREEN } from '../ultilities/Constant'
import { useCart } from '../cart/CartProvider'
function CartScreen() {
  const items = useCart()
  const totalPrice = items.reduce((total,b)=> total + b.price, 0)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cart</Text>

      </View>
      <View style={styles.content}>
        <View style={{flex: 8}}>
          <CartItem items={items}/>
        </View>
        <View style={{flex: 2}}>
          <View style={styles.totalView}>
            <Text style={styles.text}>Total</Text>
            <View style={styles.totalView1}>
              <Text style={styles.totalText}>${totalPrice}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 100
  },
  header:{
    flex: 7,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  title:{
    color: 'white',
    fontSize: 20,
    fontWeight: '800'
  },
  content:{
    flex: 95,
  },
  totalView:{
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    height: HEIGHT_SCREEN*0.05,
    borderRadius: 20,
    elevation: 1,
    justifyContent: 'space-between',
  },
  totalView1:{
    backgroundColor: Colors.blue,
    height: HEIGHT_SCREEN*0.05,
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  text:{
    marginLeft: 20,
    color: 'black',
    fontSize: 16
  },
  totalText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  checkoutButton:{
    backgroundColor: 'black',
    height: HEIGHT_SCREEN*0.06,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default CartScreen