import React, {useEffect, useState} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import { Product } from '../components/Product'
import { getProducts } from '../services/productService'

export function ProductsList({navigation}) {
    function renderProduct({item: product}) {
        return (
            <Product {...product} onPress={() => {
                navigation.navigate('ProductDetails', {
                    productId: product.id,
                }); 
            }}
            />
        );
    }

    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(getProducts());
    })

    return (
        <FlatList 
            style={styles.productsList} 
            contentContainerStyle={styles.productsListContainer} 
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}>
        </FlatList>
    );
}

const styles = StyleSheet.create({
    productsList: {
        backgroundColor: '#d9d9d9'
    },
    productsListContainer: {
        backgroundColor: '#d9d9d9',
        paddingVertical: 8,
        marginHorizontal: 8
    }
})