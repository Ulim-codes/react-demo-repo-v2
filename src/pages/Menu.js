import { Text, View, StyleSheet } from 'react-native'
import React, { PureComponent } from 'react'
import Profile from './Profile'
import Logout from './Logout'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Productos from './Productos';

const Drawer = createDrawerNavigator();
export default function Menu() {
 
    return (
       
    <Drawer.Navigator initialRouteName="Principal"   >
        <Drawer.Screen name="Principal" component={Home}  options = {{
                    headerStyle:styles.header, 
                    headerTitleStyle: styles.headerText,
                }}/>
        <Drawer.Screen name="Productos" component={Productos} options = {{
                    headerStyle:styles.header, 
                    headerTitleStyle: styles.headerText,
                }}/>
        
        <Drawer.Screen name="Cerrar Sesion" component={Logout} options = {{
                    headerStyle:styles.header, 
                    headerTitleStyle: styles.headerText,
                }}/>
    </Drawer.Navigator>
    
          
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
        backgroundColor: '#c10003'
    },
    headerText: {
        color: '#fff',
    }

  });