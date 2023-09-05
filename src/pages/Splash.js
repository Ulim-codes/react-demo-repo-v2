import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash({ navigation }) {

    useEffect(() => {
        
        setTimeout(() => {
            checkUserSession();
            
        }, 2000);
    }, []);
    const checkUserSession=()=> {
        try {
          AsyncStorage.getItem('userInfo')
            .then(value => {
              if (value != null) {
              
                navigation.navigate("Menu");
              }
              else {
                navigation.navigate('Login');
              } 
            })
        } catch (error) {
          console.log(error);
        }
      }
    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require('../../assets/images/logoK.jpeg')}
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logo: {
        margin: 20,
    },
    text: {
        fontSize: 40,
        color: '#c10003',
    },
})