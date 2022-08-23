import React from 'react'
import { Image, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { productsData } from '../data/Products'
import { HEIGHT_SCREEN, WIDTH_SCREEN } from '../ultilities/Constant'
import Colors from '../assets/colors'
function OrderItem({items}){

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={items}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=> (
                <TouchableOpacity activeOpacity={0.95} style={styles.container}>
                <Image style={styles.itemImage} source={{uri: item.image}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                </View>
                <View style={styles.countView}>
                    <Text style={styles.itemCount}>{item.countInStock}</Text>
                </View>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    itemView:{
        marginTop: 10,
        alignItems: 'center',
    },
    container: {
        height: HEIGHT_SCREEN*0.1,
        width: WIDTH_SCREEN*0.9,
        alignItems: 'center',
        marginHorizontal: 15,
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderWidth: 0.2,
        borderColor: Colors.blue

    },
    textContainer:{
        flexDirection: 'column',
    },
    itemImage:{
        width: WIDTH_SCREEN*0.2,
        height: HEIGHT_SCREEN*0.08,
        resizeMode: 'cover',
        margin: 10,
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
        borderRadius: 10,
    },
    itemCount:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    }
})

export default OrderItem