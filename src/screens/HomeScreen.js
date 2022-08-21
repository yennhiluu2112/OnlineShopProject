import React, {useContext, useEffect, useState} from 'react'
import { View, KeyboardAvoidingView, TextInput, Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList,Image } from 'react-native'
import { auth, signOut } from '../firebase/firebase';
import { AuthContext } from '../auth/AuthProvider';
import {productsData} from '../data/Products';
import { WIDTH_SCREEN, HEIGHT_SCREEN } from '../ultilities/Constant';
import ProductItem from '../components/ProductItem';
import Colors from '../assets/colors';
import Icon from 'react-native-vector-icons/Feather';
function HomeScreen({navigation}) {
  const { logout } = useContext(AuthContext);
  const [products, setProducts] = useState(productsData)
  const [searchText, setSearchText] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.smallContainer}>
          <View>
          <KeyboardAvoidingView style={styles.homeSearch}>
            <View style={styles.header}>
                <TextInput
                    placeholder='Search...'
                    style={styles.searchInput}
                    onChangeText={text=> setSearchText(text)} />
                <TouchableOpacity>
                    <Icon 
                        name='shopping-cart'
                        color={'white'}
                        size={26}
                        style={styles.bagIcon}
                    />

                </TouchableOpacity>
                
            </View>
        </KeyboardAvoidingView>
          </View>
          <FlatList
            style={styles.flatList}
            data={products.filter(eachFood => eachFood.name.toLowerCase().includes(searchText.toLowerCase()))}
            numColumns={2}
            renderItem={({item, index})=>
              <ProductItem item={item} onPress={()=>{navigation.navigate('SingleProduct', {product:item})}}/> 
            }          

          />
          
      </View>

    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafcfe',
  },
  smallContainer: {
    flex: 100,
    flexDirection: 'column',
  },
  flatList:{
    marginTop: HEIGHT_SCREEN*0.1,
  },
  homeSearch:{
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  header:{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: Colors.blue,
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  searchInput:{
      backgroundColor: 'white',
      marginVertical: 10,
      flex: 0.8,
      marginStart: 10,
      borderRadius: 10,
      paddingHorizontal: 10,
      borderColor: Colors.blue,
      borderWidth: 1,
  },
  bagIcon:{
      marginEnd: 25
  }
})

export default HomeScreen

{/* <TouchableOpacity style={{flex: 50}}
            onPress={() => logout()}>
            <Text>Log Out</Text>
          </TouchableOpacity> */}