import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import ImageViewer from '@/src/common_components/ImageViewer';
import { useNavigation } from '@react-navigation/native';
import Button from '@/src/common_components/CustomButton';
import { ThemedView } from '@/src/components/ThemedView';
import { RegisterScreenProps } from '@/src/types/AppNavigatorTypes';
const PlaceholderImage = require('@/src/assets/images/home.png');


export default function HomeScreen() {
  const navigation = useNavigation<RegisterScreenProps['navigation']>();
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.imageContainer}>
          <ImageViewer PlaceholderImage={PlaceholderImage} />
        </ThemedView>
        <ThemedView style={styles.footerContainer}>
        <Text style={styles.textStyle}>Welcome to the Home Screen!</Text>
        <Button label="Products" onPress={async () => navigation.navigate('Products')} icon="list" />
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: '60%',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2
  },
  footerContainer: {
    height: '40%',
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
   
  },
});


