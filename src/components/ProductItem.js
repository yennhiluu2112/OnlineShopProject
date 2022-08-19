import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity  } from 'react-native'
import FiveStars from './FiveStars';
import { WIDTH_SCREEN, HEIGHT_SCREEN } from '../ultilities/Constant';
import Colors from '../assets/colors';
function ProductItem(props){
    const {item, onPress} = props
    return (
        <TouchableOpacity 
          activeOpacity={0.8}
          style={styles.itemView}
          onPress={onPress}>
            <Image 
                source={{uri: item.image}}
                style={styles.itemImage}
            />
            <Text style={styles.itemPrice}>${item.price}</Text>
            <Text style={styles.itemName}>{item.name}</Text>
            <FiveStars numberOfStars={item.rating} iconSize={15}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemView:{
      width: WIDTH_SCREEN*0.45,
      marginTop: 10,
      marginBottom: 5,
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 10,
      padding: 10,
      shadowColor: 'black',
      shadowOpacity: 0.8,
      shadowOffset: { width: 0, height: 1},
      shadowRadius: 10,
      elevation: 1,
      backgroundColor: 'white'
    },
    itemImage:{
      width: 100,
      height: 100,
      resizeMode: 'cover',
      alignSelf: 'center',
    },
    itemName:{
      fontSize: 15,
      fontWeight: '500',
      color: Colors.black,
      
    },
    itemPrice:{
      fontSize: 20,
      fontWeight: '800',
      color: Colors.black,
      marginTop: 10,
    }
  
  })



export default ProductItem