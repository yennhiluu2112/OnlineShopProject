import React from 'react'
import { View, Image, Text, StyleSheet  } from 'react-native'
import FiveStars from './FiveStars';
import { WIDTH_SCREEN, HEIGHT_SCREEN } from '../ultilities/Constant';
import Colors from '../assets/colors';
function ProductItem(props){
    const {item} = props
    return (
        <View style={styles.itemView}>
            <Image 
                source={{uri: item.image}}
                style={styles.itemImage}
            />
            <Text style={styles.itemPrice}>${item.price}</Text>
            <Text style={styles.itemName}>{item.name}</Text>
            <FiveStars numberOfStars={item.rating}/>
        </View>
    )
}

const styles = StyleSheet.create({
    itemView:{
      width: WIDTH_SCREEN*0.45,
      height: 200,
      marginTop: 10,
      marginBottom: 5,
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 10,
      borderWidth: 0.2,
      borderColor: Colors.darkGray,
      padding: 10,
      
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