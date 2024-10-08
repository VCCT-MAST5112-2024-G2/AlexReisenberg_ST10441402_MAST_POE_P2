// screens/FilterMenu.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../types';

type FilterMenuProps = NativeStackScreenProps<AppStackParamList, 'Filter'>;

export default function FilterMenuScreen({ navigation }: FilterMenuProps) {
  const [filter, setFilter] = useState('');

  // Function to handle applying the filter
  const applyFilter = () => {
    navigation.navigate('Home', { filter });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu Items</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Course Type (e.g., Appetizer, Main, Dessert)"
        value={filter}
        onChangeText={setFilter}
      />
      <TouchableOpacity style={styles.button} onPress={applyFilter}>
        <Text style={styles.buttonText}>Apply Filter</Text>
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
    backgroundColor: '#000000', // Changed to match HomeScreen background
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFFFFF', // Changed to white to match HomeScreen
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#00BFFF', // Changed to match HomeScreen button color
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#FFFFFF', // Change to white for text visibility
  },
  button: {
    backgroundColor: '#00BFFF', // Changed to match HomeScreen button color
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
