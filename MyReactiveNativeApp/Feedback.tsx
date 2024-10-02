// feedback.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App'; // Adjust the import path if necessary
import { RouteProp } from '@react-navigation/native';

type FeedbackScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Feedback'>;
  route: RouteProp<RootStackParamList, 'Feedback'>;
};

const Feedback: React.FC<FeedbackScreenProps> = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (feedback.trim()) {
      // Handle the feedback submission here
      Alert.alert('Feedback Submitted', 'Thank you for your feedback!', [{ text: 'OK' }]);
      setFeedback(''); // Clear the input field after submission
    } else {
      Alert.alert('Error', 'Please enter your feedback before submitting.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Feedback</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Enter your feedback here..."
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Submit" onPress={handleSubmit} />
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
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

export default Feedback;
