import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { meals } from './mealData'; // Adjust the path based on your project structure
import { Picker } from '@react-native-picker/picker';

const FilterPage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<'starter' | 'main' | 'dessert'>('starter');

  // Filter meals based on the selected course
  const filteredMeals = meals.filter((meal) => meal.course === selectedCourse);

  // Calculate the average price of the filtered meals
  const averagePrice =
    filteredMeals.length > 0
      ? filteredMeals.reduce((total, meal) => total + meal.price, 0) / filteredMeals.length
      : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Course:</Text>

      {/* Dropdown Picker to select the course */}
      <Picker
        selectedValue={selectedCourse}
        style={styles.picker}
        onValueChange={(itemValue: 'starter' | 'main' | 'dessert') => setSelectedCourse(itemValue)}
      >
        <Picker.Item label="Starters" value="starter" />
        <Picker.Item label="Mains" value="main" />
        <Picker.Item label="Desserts" value="dessert" />
      </Picker>

      {/* List of meals for the selected course */}
      <Text style={styles.subtitle}>Available Meals:</Text>
      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => item.name} // Assuming meal names are unique
        renderItem={({ item }) => (
          <View style={styles.mealItem}>
            <Text style={styles.mealName}>{item.name}</Text>
            <Text style={styles.mealPrice}>R{item.price}</Text>
          </View>
        )}
      />

      {/* Display average price */}
      <Text style={styles.averagePrice}>Average Price: R{averagePrice.toFixed(2)}</Text>
    </View>
  );
};

// Your styles remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mealItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  mealName: {
    fontSize: 16,
  },
  mealPrice: {
    fontSize: 16,
    color: '#888',
  },
  averagePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default FilterPage;
