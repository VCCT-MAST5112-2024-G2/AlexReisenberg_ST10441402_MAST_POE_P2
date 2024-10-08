// screens/AddMenu.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../types';

type AddMenuProps = NativeStackScreenProps<AppStackParamList, 'AddMenu'>;

export default function AddMenuScreen({ navigation }: AddMenuProps) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');

  // Function to handle adding the menu item
  const handleAddMenuItem = () => {
    const newItem = { dishName, description, course, price: parseFloat(price) };
    navigation.navigate('Home', { newItem });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Menu Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        placeholderTextColor="#D3D3D3"  // Light placeholder color for black background
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#D3D3D3"  // Light placeholder color
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Course (e.g., Appetizer, Main, Dessert)"
        placeholderTextColor="#D3D3D3"  // Light placeholder color
        value={course}
        onChangeText={setCourse}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        placeholderTextColor="#D3D3D3"  // Light placeholder color
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddMenuItem}>
        <Text style={styles.buttonText}>Add to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',  // Set background to black
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFF',  // Set title color to white for visibility
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#FFF',  // Set input border to white for visibility
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#FFF',  // Set text color to white for visibility on black background
  },
  button: {
    backgroundColor: '#3498DB',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
