import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import CustomButton from '../utils/CustomButton';


export default function Productos({navigation}) {
  const [myListData, setMyListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(true);
  useEffect(() => {
    if (reload){
      getDataFromApi();
    }
  
  }, [reload]);

  const getDataFromApi = async () => {
    console.log("api")
    setLoading(true);
    const API_URL = 'https://dummyjson.com/products';
    const result = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await result.json();
  
    if (json) {
      setMyListData(json.products);

    } else {
      console.log('Unable to fetch!');
    }
    setLoading(false);
  }
 
  const deleteItem = async (id) => {
    console.log("Delete item ", id);
    setReload(false);
    const result= await fetch('https://dummyjson.com/products/'+id, {
      method: 'DELETE',
    })
    const json = await result.json();
    if (json)
    {
      console.log("Respuesta ", json)
        Alert.alert("Confirmación", "Está seguro de eliminar este producto?", [
          {
            text:'Si',
            onPress:()=>{ setReload(true); ToastAndroid.show('Producto eliminado con exito!', ToastAndroid.SHORT, ToastAndroid.TOP)}
          },
          {
            text:'No',
            onPress:()=>{ ToastAndroid.show('No se pudo eliminar el producto. Vuelva a intentar!', ToastAndroid.SHORT, ToastAndroid.TOP)}
          }
        ])
    }
    else {
      setReload(false);
      Alert.alert("Error", "Ocurrio un error inesperado")
    }
    
     
  }
  
  const goToProduct=()=>{
    navigation.navigate("Nuevo Producto")
  }

  return (
    <View style={styles.container}>

      {loading ? (
        <ActivityIndicator size="large" />
      ) :
        <FlatList keyExtractor={(item, index) => index}
          data={myListData} renderItem={({ item }) =>
            <View style={styles.item}>
              <Text>Categoria: {item.category}</Text>
              <Text>Producto: {item.title}</Text>
              <Text>Precio: {item.price}</Text>
              <Text>Stock: {item.stock}</Text>
              <CustomButton icon='trash' iconColor='white' buttonColor='transparent' buttonWidth='50%' onPressFunction={()=>deleteItem(item.id)}></CustomButton>
              
            </View>

          } />
      }
      <CustomButton styleBt={styles.buttonAdd} icon='plus' iconColor='white' buttonColor='#ce4646' buttonWidth='20%'  onPressFunction={()=>goToProduct()}></CustomButton>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    borderRadius: 10,
    backgroundColor: '#6666',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemText: {
    fontWeight: 600
  },
  buttonAdd: {
    height:60,
    borderRadius:60,
    justifyContent:'center',
    position:'absolute',
    bottom:10,
    right:10,
    elevation:5,
    zIndex:1,
    alignSelf:'flex-end',
},
});