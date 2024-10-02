import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App'; // Adjust the import path as necessary

type EditMenuScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'EditMenu'>;
  route: RouteProp<RootStackParamList, 'EditMenu'>;
};

const EditMenu: React.FC<EditMenuScreenProps> = ({ navigation, route }) => {
  const { menuItems, setMenuItems } = route.params; // Get menu items from route params

  const [newItem, setNewItem] = useState({ name: '', price: '', image: '' });

  const addMenuItem = () => {
    const { name, price, image } = newItem;

    // Validation: Check for empty fields
    if (!name || !price || !image) {
      Alert.alert('Validation Error', 'All fields must be filled out.');
      return;
    }

    // Check if price is a valid number
    if (isNaN(Number(price))) {
      Alert.alert('Validation Error', 'Price must be a valid number.');
      return;
    }

    const updatedItems = [...menuItems, { name, price: parseFloat(price), image }];
    setMenuItems(updatedItems); // Update menu items
    setNewItem({ name: '', price: '', image: '' }); // Reset input fields
  };

  const deleteMenuItem = (itemToDelete: string) => {
    const updatedItems = menuItems.filter(item => item.name !== itemToDelete);
    setMenuItems(updatedItems); // Update menu items
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Menu</Text>

      <TextInput
        placeholder="Item Name"
        value={newItem.name}
        onChangeText={text => setNewItem({ ...newItem, name: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Item Price"
        value={newItem.price}
        onChangeText={text => setNewItem({ ...newItem, price: text })}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Image URL"
        value={newItem.image}
        onChangeText={text => setNewItem({ ...newItem, image: text })}
        style={styles.input}
      />
      <Button title="Add Menu Item" onPress={addMenuItem} />

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name} - R{item.price.toFixed(2)}</Text>
            <Button title="Delete" onPress={() => deleteMenuItem(item.name)} />
          </View>
        )}
      />

      {/* Navigation Button to Add Dish Screen */}
      <Button
        title="Add Dish"
        onPress={() => navigation.navigate('AddDish')} // Navigate to AddDish screen
        color="blue"
      />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default EditMenu;
