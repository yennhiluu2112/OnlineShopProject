import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import NumericInput from 'react-native-numeric-input';
import Colors from '../assets/colors';
import FiveStars from '../components/FiveStars';
import { WIDTH_SCREEN, HEIGHT_SCREEN } from '../ultilities/Constant';
import { useDispatchCart } from '../cart/CartProvider';
import Icon from 'react-native-vector-icons/Feather';
function SingleProductScreen({ route, navigation }) {
  const {product}  = route.params;
  const dispatch = useDispatchCart()
  const addToCart = (item) => {
    dispatch({type: "ADD",item})
  }
  return (
    <SafeAreaView style={styles.container}>
        <Icon 
          name='arrow-left' 
          color={'black'} 
          size = {30} 
          style={{paddingLeft: 10, paddingTop: 10}}
          onPress={()=>navigation.goBack()}
        />
        <ScrollView>
          <Image style={styles.itemImage} source={{uri: product.image}}/>
          <View style={styles.smallContainer}>
            <Text style={styles.itemName}>{product.name}</Text>
            <View style={styles.rating}>
              <FiveStars numberOfStars={product.rating} iconSize={18}/>
            </View>
            <View style={styles.view1}>
              <NumericInput 
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                maxValue={product.countInStock}
                minValue={0}
                borderColor={Colors.gray}
                rounded={true}
                textColor={Colors.black}
                iconStyle={{color: Colors.white}}            
                rightButtonBackgroundColor={Colors.black}
                leftButtonBackgroundColor={Colors.black}
              />

              <Text style={styles.priceText}>${product.price}</Text>

            </View>

            <View style={styles.descriptionView}>
              <Text style={styles.descriptionText}>{product.desciprtion}</Text>
            </View>

            <TouchableOpacity style={styles.addButton} onPress={()=>{
              if (product.countInStock){
                addToCart(product)
              }
              else{
                alert("This product has been out of stock")
              }
              
            }}>
              <Text style={styles.addText}>ADD TO CART</Text>
            </TouchableOpacity>
            
            
          </View>

        </ScrollView>
        
        
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  },
  itemImage:{
    width: WIDTH_SCREEN*0.8,
    height: HEIGHT_SCREEN*0.35,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 0
  },
  smallContainer:{
    paddingHorizontal: 20,
  },
  itemName:{
    fontSize: 20,
    marginTop: 20,
    fontWeight: '500',
    color: Colors.black,
  },
  view1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  rating:{
    marginTop:10,
    marginBottom:20
  },
  priceText:{
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  descriptionView:{
    height: HEIGHT_SCREEN*0.25,
  },
  descriptionText:{
    fontSize: 15,
    color: 'black',
  },
  addButton:{
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    marginHorizontal: 10,
    borderRadius: 25
  },
  addText:{
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 15
  }
})

export default SingleProductScreen