import React, {useContext, useState} from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList,Image } from 'react-native'
import { auth, signOut } from '../firebase/firebase';
import { AuthContext } from '../auth/AuthProvider';
import HomeSearch from '../components/HomeSearch';
import {productsData} from '../data/Products';
import { WIDTH_SCREEN, HEIGHT_SCREEN } from '../ultilities/Constant';
import ProductItem from '../components/ProductItem';
function HomeScreen({navigation}) {
  const { logout } = useContext(AuthContext);
  const [products, setProducts] = useState(productsData)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.smallContainer}>
          <HomeSearch/>
          <FlatList
            style={styles.flatList}
            data={products}
            numColumns={2}
            renderItem={({item, index})=>
              <ProductItem item={item}/> 
            }          

          />
          
      </View>

    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  smallContainer: {
    flex: 100,
    flexDirection: 'column',
  },
  flatList:{
    position: 'absolute',
    top: HEIGHT_SCREEN*0.1,
    height: HEIGHT_SCREEN*0.85
  },
})

export default HomeScreen

{/* <TouchableOpacity style={{flex: 50}}
            onPress={() => logout()}>
            <Text>Log Out</Text>
          </TouchableOpacity> */}