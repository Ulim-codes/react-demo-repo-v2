import { View, Text, TextInput, StyleSheet, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../utils/CustomButton';

export default function AddProducto({navigation}) {

  const [categoria, setCategoria] = useState('');
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [myListData, setMyListData] = useState([]);
  const [items, setItems] = useState([]);
  const itemsTmp=[];
  useEffect(() => {
      getCategories();
  }, []);

  const getCategories = async () => {
    setLoading(true);
    const API_URL = 'https://dummyjson.com/products/categories';
    const result = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await result.json();
  
    if (json) {
      let data=json;
      
      let i=0;
      data.forEach(element => {
        i++;
        let info={
          label:element,
          value:element
        }
        
        itemsTmp.push(info);
        
      });
      setItems(itemsTmp);
    } else {
      console.log('Unable to fetch!');
    }
  }

  const goToProduct=()=>{
    navigation.navigate("Productos")
  }

  const saveProducts = async () => {
    setLoading(true);
    const API_URL = 'https://dummyjson.com/products/add';
    const result = await fetch(API_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({
        title: producto,
        price: precio,
        stock: stock,
        category: categoria
        /* other product data */
      })
    });
    const json = await result.json();
    console.log(json);
    if (json) {
      /*setMyListData(json.products);*/
      ToastAndroid.show('Producto agregado con exito!', ToastAndroid.SHORT, ToastAndroid.TOP)
      goToProduct();
    } else {
      ToastAndroid.show('Error al intentar guardar el producto!', ToastAndroid.SHORT, ToastAndroid.TOP)
     
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categoria</Text>
      <DropDownPicker
        style={styles.picker}
        open={open}
        value={categoria}
        items={items}
        setOpen={setOpen}
        setValue={setCategoria}
        setItems={setItems}
        itemKey="label"
        placeholder='Seleccione una categoria'
      />
      <Text style={styles.title}>Producto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre Producto"
        onChangeText={(value) => setProducto(value)}
      />
      <Text style={styles.title}>Precio</Text>
      <TextInput
        style={styles.input}
        placeholder="Precio Unitario"
        onChangeText={(value) => setPrecio(value)}
        inputMode='numeric'
      />
      <Text style={styles.title}>Cantidad Disponible</Text>
      <TextInput
        style={styles.input}
        placeholder="Cantidad Disponible"
        onChangeText={(value) => setStock(value)}
        inputMode='numeric'
      />
      <CustomButton styleBt="" title="Guardar" buttonColor='#c10003' buttonWidth='50%'
         onPressFunction={saveProducts}>
      </CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    margin: 12,
    marginBottom: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  picker: {
    backgroundColor: 'white',
    width: 389,
    height: 50,
    margin: 12,
    marginBottom: 50,
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

    alignItems: 'center',
    padding: 20


  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  title: {
    fontSize:20,
    marginLeft: 12
  }
});