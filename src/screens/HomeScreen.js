import React, {useContext} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { auth, signOut } from '../firebase/firebase';
import { AuthContext } from '../auth/AuthProvider';
function HomeScreen({navigation}) {
  const { logout } = useContext(AuthContext);

  return (
    <View>
        <Text>HomeScreen</Text>
        <TouchableOpacity
          onPress={() => logout()}>
          <Text>Log Out</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen