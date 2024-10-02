import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ImageBackground, StyleSheet, Button } from 'react-native';
import Menu from './Menu'; // Adjust the import path if necessary
import Description from './Description'; // Ensure you have this screen
import Cart from './Cart'; 
import EditMenu from './EditMenu'; 
import AddDish from './AddDish'; // Import AddDish
import DeleteDish from './DeleteDish';

export type RootStackParamList = {
  Home: undefined;
  Booking: undefined;
  Menu: undefined; 
  Description: { meal: { name: string; price: number; image: string; } };
  Cart: { cartItems: { name: string; price: number; image: string; }[] };
  Feedback: undefined; 
  EditMenu: { 
    menuItems: { name: string; price: number; image: string; }[], 
    setMenuItems: React.Dispatch<React.SetStateAction<{ name: string; price: number; image: string; }[]>> 
  }; 
  AddDish: undefined; 
  DeleteDish: { menuItems: { name: string; price: number; image: string; }[], setMenuItems: React.Dispatch<React.SetStateAction<{ name: string; price: number; image: string; }[]>> }; // Add this line

};

const Stack = createStackNavigator<RootStackParamList>();

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ImageBackground 
      source={{ uri: 'https://example.com/your-image-url.png' }} 
      style={styles.image}>
      <View style={styles.overlay}>
        <Text style={styles.text}>Welcome to Cristofell's cuisine</Text>
        <Button
          title="Book"
          onPress={() => navigation.navigate('Booking')}
          color="black"
        />
        <Button
          title="Menu" // Add button to navigate to the Menu
          onPress={() => navigation.navigate('Menu')}
          color="black"
        />
        <Button
          title="Cart" // Add button to navigate to the Cart
          onPress={() => navigation.navigate('Cart')}
          color="black"
        />
      </View>
    </ImageBackground>
  );
};

const BookingScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Welcome to the Booking Page</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Menu" component={Menu} /> {/* Add Menu Screen */}
        <Stack.Screen name="Description" component={Description} /> {/* Ensure you have this screen */}
        <Stack.Screen name="Cart" component={Cart} /> {/* Add Cart Screen */}
        <Stack.Screen name="EditMenu" component={EditMenu} /> {/* Add Edit Menu Screen */}
        <Stack.Screen name="AddDish" component={AddDish} /> {/* Add Add Dish Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
