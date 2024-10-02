// Description.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Meal {
  name: string;
  price: number;
  image: string;
}

const Description: React.FC<{ route: any }> = ({ route }) => {
  const { meal }: { meal: Meal } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.image }} style={styles.image} />
      <Text style={styles.name}>{meal.name}</Text>
      <Text style={styles.price}>Price: R{meal.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginTop: 5,
  },
});

export default Description;
