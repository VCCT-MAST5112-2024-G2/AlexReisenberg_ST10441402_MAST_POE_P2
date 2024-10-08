import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../types';

type HomeProps = NativeStackScreenProps<AppStackParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to </Text>
      
      {/* Moved the Image component below the Title */}
      <Image style={styles.imageSize} source={require('../assets/logo_3.png')} />

      <View style={styles.buttonContainer}>
        <Button 
          title="Add Menu" 
          onPress={() => navigation.navigate('AddMenu')} 
          color={styles.buttonColor.color} // Setting button color
        />
        <Button 
          title="Filter Menu" 
          onPress={() => navigation.navigate('Filter')} 
          color={styles.buttonColor.color} // Setting button color
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  imageSize: {
    width: 150,  // Adjust the size as needed
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF', // Change to your desired text color (e.g., Deep Sky Blue)
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  buttonColor: {
    color: '#00BFFF', // Match this color with the title color
  },
});
