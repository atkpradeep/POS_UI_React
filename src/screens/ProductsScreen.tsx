import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProducts,Product } from '@/src/services/productService';



export default function ProductList() {


    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const _productList = await getProducts();
            setProducts(_productList);
        } catch (error) {
            console.log('Error loading products', error);
        }
    };
      

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.productItem}>
                        <Text>{item.name} - ${item.price}</Text>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f9c2ff',
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    editButton: {
        color: 'blue',
        marginRight: 10,
    },
    removeButton: {
        color: 'red',
    },
});
