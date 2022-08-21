import React from 'react'
import { View,Image, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import Colors from '../assets/colors'
import { productsData } from '../data/Products'
import { WIDTH_SCREEN, HEIGHT_SCREEN} from '../ultilities/Constant'
import {  useDispatchCart } from '../cart/CartProvider'
function Swiper({items}) {
    const dispatch = useDispatchCart()

    handleDelete = (index) => {
        dispatch({type: 'DELETE', index})
    }
    return (
        <SwipeListView 
        data={items}
        renderItem={
            data => 
            <TouchableOpacity activeOpacity={0.95} style={styles.container}>
                <Image style={styles.itemImage} source={{uri: data.item.image}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.itemName}>{data.item.name}</Text>
                    <Text style={styles.itemPrice}>${data.item.price}</Text>
                </View>
                <View style={styles.countView}>
                    <Text style={styles.itemCount}>{data.item.countInStock}</Text>
                </View>
            </TouchableOpacity>}
        renderHiddenItem={
            data => 
            <TouchableOpacity 
                activeOpacity={0.9} 
                style={styles.container2}
                onPress={handleDelete(data.index)}
            >
                    <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
        }
        rightOpenValue={-65}
        />
    )
    
}

function CartItem({items}){
    return (
        <SafeAreaView style={styles.itemView}>
            <Swiper items={items}/>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    itemView:{
        marginTop: 10,
        alignItems: 'center',
    },
    container: {
        height: HEIGHT_SCREEN*0.12,
        width: WIDTH_SCREEN*0.9,
        alignItems: 'center',
        marginHorizontal: 15,
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    container2: {
        width: WIDTH_SCREEN*0.17,
        height: HEIGHT_SCREEN*0.12,
        backgroundColor: 'red',
        position: 'absolute',
        right: 0,
        marginHorizontal: 15,
        marginVertical: 10,
        borderTopRightRadius: 11,
        borderBottomRightRadius: 11,
        justifyContent: 'center',
        alignItems  : 'center'
    },
    textContainer:{
        flexDirection: 'column',

    },
    delete:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    itemImage:{
        width: WIDTH_SCREEN*0.2,
        height: HEIGHT_SCREEN*0.1,
        resizeMode: 'cover',
        marginHorizontal: 10
    },
    itemName:{
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10,
        color: 'black'
    },
    countView:{
        backgroundColor: Colors.blue,
        width: 40,
        padding: 10,
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    itemCount:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    }
})

export default CartItem