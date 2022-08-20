import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { HEIGHT_SCREEN, WIDTH_SCREEN } from '../../ultilities/Constant'
import Colors from '../../assets/colors'
function Orders() {
  return (
    <View style={styles.container}>
        <View style={styles.smallContainer}>
            <Text style={styles.text1}>123456789</Text>
            <Text style={styles.text2}>{1 ? 'PAID' : 'UNPAID'}</Text>
            <Text style={styles.text3}>Dec 12 2022</Text>
            <View style={[styles.priceView, {backgroundColor: 1 ? Colors.blue : Colors.red}]}>
                <Text style={styles.text4}>$456</Text>
            </View>
            

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    smallContainer:{
        backgroundColor: '#fafcfe',
        height: HEIGHT_SCREEN*0.07,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    priceView:{
        padding: 10,
        borderRadius: 10
    },
    text1:{
        color: Colors.blue
    },
    text2:{
        fontWeight: 'bold',
        color: 'black'
    },
    text3:{
        fontStyle: 'italic',
    },
    text4:{
        color: 'white',
        fontWeight : 'bold',
    }
})

export default Orders