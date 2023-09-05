import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList } from 'react-native';

export default function Home() {

  const [name, setName] = useState('');
  

  useEffect(() => {
    getData();
   
  }, []);

  

  const getData = () => {
    try {
      AsyncStorage.getItem('userInfo')
        .then(value => {
          if (value != null) {
            let user = JSON.parse(value);
            setName(user.Name);

          }
        })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.bienvenido}> {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding:20
  },
  title: {
    
    fontSize:40,
    justifyContent:'center',
    padding:10
  },
  bienvenido: {
    
    fontSize:35,
    fontStyle:'italic',
    fontWeight:'500',
    justifyContent:'center',
    padding:10
  },
});