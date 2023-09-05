import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/Login'
import Menu from '../pages/Menu';
import Splash from '../pages/Splash';
import AddProducto from '../pages/AddProducto';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
             <Stack.Screen 
                name="Splash"
                component={Splash}
                options = {{headerShown: false}}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
                options = {{headerShown: false}}
            />
            <Stack.Screen 

                name="Menu"
                component={Menu}
                options = {{headerShown: false}}
            />
            <Stack.Screen 

            name="Nuevo Producto"
            component={AddProducto}
            options = {{
                headerStyle:styles.header, 
                headerTitleStyle: styles.headerText,
            }}
            
            />
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
   
    header: {
        backgroundColor: '#c10003'
    },
    headerText: {
        color: '#fff',
    }

  });