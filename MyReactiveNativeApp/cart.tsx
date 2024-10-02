import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App'; // Adjust the import path as necessary

// Define the type for a cart item
type CartItem = {
  name: string;
  price: number;
  image: string; // Optional if you have images
};

type CartScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Cart'>;
  route: RouteProp<RootStackParamList, 'Cart'>;
};

const Cart: React.FC<CartScreenProps> = ({ route }) => {
  // Safely access cartItems, defaulting to an empty array if undefined
  const cartItems: CartItem[] = route.params?.cartItems || [];

  // Calculate total price
  const total = cartItems.reduce((acc: number, item: CartItem) => acc + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>R{item.price}</Text>
            </View>
          )}
        />
      )}
      <Text style={styles.total}>Total: R{total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  item: {
    padding: 15,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: '#555',
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Cart;
