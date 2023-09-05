import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
export default function CustomButton(props) {
  return (
    <View style={styles.viewStyle}> 
        <TouchableOpacity onPress={props.onPressFunction}
        style={[{backgroundColor: props.buttonColor},{width: props.buttonWidth}, styles.buTouch, props.styleBt]} hitSlop={{top:10, bottom:10, left:10, right:10}}>
        {
            props.title ?( <Text style={styles.texto}>{props.title}</Text>):''
        }
        {props.icon 
            ? (<FontAwesome5 
                name={props.icon}
                size={25}
                color={props.iconColor?props.iconColor:'white'}>
            </FontAwesome5>):''
        }
            
        </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
    buTouch: {
        height: 50,
        margin: 12,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
        
      
    },
    texto: {
        color:'#fff',
        fontSize:16,
        fontWeight:'500'
    },
    viewStyle: {
   
        justifyContent: 'center',
        
        alignItems:'center',
        padding:10
        
        
      },
  });