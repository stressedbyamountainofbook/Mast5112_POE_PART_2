// Menu.tsx
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App'; // Adjust the import path as necessary

type MenuScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Menu'>;
};

const Menu: React.FC<MenuScreenProps> = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([
    { name: 'Burger', price: 50, image: 'image-url-1' },
    { name: 'Pizza', price: 80, image: 'image-url-2' },
    // Add initial items here
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name} - R{item.price}</Text>
          </View>
        )}
      />
      <Button
        title="Edit Menu"
        onPress={() => navigation.navigate('EditMenu', { menuItems, setMenuItems })}
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
  itemContainer: {
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Menu;
