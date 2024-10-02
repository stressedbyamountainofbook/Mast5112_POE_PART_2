import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker from the installed package

const AddDish = () => {
  const [dishName, setDishName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [course, setCourse] = useState<string>(''); // Explicitly define the type as string

  const handleAddDish = () => {
    // Handle the logic to add the dish (e.g., send to server or update state)
    console.log({
      name: dishName,
      price: parseFloat(price),
      description,
      imageUrl,
      course,
    });

    // Reset fields after adding
    setDishName('');
    setPrice('');
    setDescription('');
    setImageUrl('');
    setCourse('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Dish</Text>
      
      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Image URL"
        value={imageUrl}
        onChangeText={setImageUrl}
        style={styles.input}
      />
      
      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(itemValue: string) => setCourse(itemValue)} // Explicitly define the type as string
      >
        <Picker.Item label="Select Course" value="" />
        <Picker.Item label="Appetizer" value="appetizer" />
        <Picker.Item label="Main Course" value="main_course" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>

      <Button title="Add Dish" onPress={handleAddDish} />
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
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
});

export default AddDish;
