import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import ImageViewer from '../../src/common_components/ImageViewer';
import Button from '../../src/common_components/CustomButton';

const PlaceholderImage = require('../../src/assets/images/background.jpg');

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer PlaceholderImage={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.textStyle}>Welcome! lets start now</Text>
        <Link href={'/login'} asChild>
          <Button label="Sign In" onPress={() => { }} icon={'sign-in'} />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%', // Set the desired width of the container
    height: 540, // Set the desired height of the container
    borderRadius: 10, // Rounded corners for the container
    overflow: 'hidden', // Ensure the image fits within the container
    borderWidth: 2, // Optional: Add border width
    borderColor: '#ccc', // Optional: Set border color
    justifyContent: 'center', // Center the image within the container
    alignItems: 'center', 
    paddingTop:2
},
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center',
    padding: 15
  },

});