import React, { useEffect,useState, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import Colors from '../assets/colors'
import Icon from 'react-native-vector-icons/Feather'
import { HEIGHT_SCREEN, WIDTH_SCREEN } from '../ultilities/Constant'
import OrderItem from '../components/OrderItem'
import { AuthContext } from '../auth/AuthProvider'
import { useCart, useDispatchCart } from '../cart/CartProvider'

function PlaceOrderScreen({navigation}) {
  const items = useCart()
  const totalPrice = items.reduce((total,b)=> total + b.price, 0)
  const dispatch = useDispatchCart()

  handleRenew = () => {
      dispatch({type: 'RENEW_CART'})
  }

  const { user, readData } = useContext(AuthContext);
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  
  useEffect(()=>{
    setPhone(readData().phone)
    setName(readData().name)
    setAddress(readData().address)
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name='user'size={50} color={Colors.blue}/>
        <Text style={styles.text1}>{name}</Text>
        <Text style={styles.text2}>{phone}</Text>
        <Text style={styles.text2}>{address}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.totalView}>
          <Text style={styles.totalText}>${totalPrice}</Text>
        </View>
        <Text style={styles.text}>PRODUCTS</Text>
        <View style={{height: HEIGHT_SCREEN*0.5}}>
          <OrderItem items={items}/>
        </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={()=>{
            handleRenew()
            navigation.navigate('Cart')
          }}
        >
          <Text style={styles.buttonText}>FINISH</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 100,
    backgroundColor: '#fafcfe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
    flex: 20,
    justifyContent: 'center',
    width: WIDTH_SCREEN*0.5,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.blue,
    marginTop: 10
  },
  text1:{
    marginTop: 10,
    marginBottom: 5,
    fontSize: 17,
    fontWeight: '700',
    color: 'black'

  },
  text2:{
    marginVertical: 5
  },
  content:{
    flex:80,
  },
  text:{
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
    marginHorizontal: 20,
    marginTop: 10
  },
  totalText:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  totalView:{
    borderRadius: 20,
    backgroundColor: Colors.blue,
    width: WIDTH_SCREEN*0.3,
    marginHorizontal: 20,
    height: HEIGHT_SCREEN*0.055,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  button:{
    backgroundColor: 'black',
    height: HEIGHT_SCREEN*0.055,
    borderRadius: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  }
})

export default PlaceOrderScreen