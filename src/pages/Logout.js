import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = ({navigation}) => {
    useEffect(() => {
       closeApp();
      }, []);
    const closeApp = () => {
        AsyncStorage.removeItem('userInfo');
        navigation.replace("Login");
    }
  return (
    <View>
      <Text>Logout</Text>
    </View>
  )
}

export default Logout