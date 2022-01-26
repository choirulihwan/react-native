import React from 'react'
import {StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProductsList } from './screens/ProductsList';
import { ProductDetails } from './screens/ProductDetails';
import { Cart } from './screens/Carts';
import { CartIcon } from './components/CartIcon';
import { CartProvider } from './CartContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsList} options={({navigation}) => ({
            title:'List Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />


          <Stack.Screen name="ProductDetails" component={ProductDetails} options={({navigation}) => ({
            title:'Product details',
            headerTitleStyle: styles.headerTitle,
            
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />

          <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({
            title:'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />

          
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize:18,
    backgroundColor: '#fff'
  }
});
