import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App'; // Adjust the import path as necessary

type DeleteDishScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'DeleteDish'>;
  route: RouteProp<RootStackParamList, 'DeleteDish'>;
};

const DeleteDish: React.FC<DeleteDishScreenProps> = ({ navigation, route }) => {
  const { menuItems, setMenuItems } = route.params; // Get menu items and setter function from route params

  const deleteDish = (dishToDelete: string) => {
    const updatedMenuItems = menuItems.filter(item => item.name !== dishToDelete);
    setMenuItems(updatedMenuItems); // Update the menu items
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Delete Dish</Text>
      
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name} - R{item.price}</Text>
            <Button title="Delete" onPress={() => deleteDish(item.name)} />
          </View>
        )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default DeleteDish;
