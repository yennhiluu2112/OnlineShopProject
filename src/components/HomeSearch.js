import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Colors from '../assets/colors'
function HomeSearch(){
    return (
        <KeyboardAvoidingView style={styles.homeSearch}>
            <View style={styles.header}>
                <TextInput
                    placeholder='Search...'
                    style={styles.searchInput} />
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

    )
}

const styles = StyleSheet.create({
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

export default HomeSearch