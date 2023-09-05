import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, ImageBackground, Alert, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../utils/CustomButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const image = { require: '../../assets/images/logo.png' };

export default function Login({ navigation }) {
 
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
   
  const login = async () => {
    console.log(name);
    if (name.length == 0) {
      Alert.alert("Atencion", "Ingrese su usuario para continuar!")
    }
    else if (pass.length == 0) {
      Alert.alert("Atencion", "Ingrese su password para continuar!")
    }
    else {
      var info = {
        "Name": name,
        "Age": ""
      }
      await AsyncStorage.setItem("userInfo", JSON.stringify(info));
      navigation.navigate("Menu");
    }
  }
  
  return (


    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#00000', alignContent:'center' }}>
      <ImageBackground source={require( '../../assets/images/logo.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>INICIAR SESION</Text>
        </View>
        

          <TextInput
            style={styles.input}
            placeholder="Usuario"
            onChangeText={(value) => setName(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(value) => setPass(value)}
          />
          <CustomButton  styleBt="" title="Ingresar" buttonColor='#c10003' buttonWidth='50%'
            onPressFunction={login} >
           
            </CustomButton>
          
      </ImageBackground>
                
                
              
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  viewTitle: {
   
    justifyContent: 'center',
    
    alignItems:'center',
    padding:20
    
    
  },
  title: {
    fontSize:20,
    color: 'white',
  }
});