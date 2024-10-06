import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import ImageViewer from '@/src/common_components/ImageViewer';
import Button from '@/src/common_components/CustomButton';
import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

const PlaceholderImage = require('@/src/assets/images/reset_password.jpg');

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();


  const handlePasswordReset = async () => {
     // Input validation
     if (!email.trim()) {
      alert('Email cannot be empty.');
      return;
    }

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { email });
      if (response.status === 201) {
        Alert.alert('Password reset email sent!');
      }
    } catch (error) {
      Alert.alert('Failed to send email.', 'Please check the email address.');
    }
  };

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.imageContainer}>
          <ImageViewer PlaceholderImage={PlaceholderImage} />
        </ThemedView>
        <ThemedView style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </ThemedView>
        <ThemedView style={styles.footerContainer}>
          <Button title="Send Reset Email" label="Reset Password" onPress={handlePasswordReset} />
          <Button icon="sign-in" label="Login" onPress={() => navigation.navigate('Login')} />
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
  inputContainer: {
    height: '25%',
    padding: 5
  },
  footerContainer: {
    height: '15%',
    padding: 15
  },
  input: {
    borderWidth: 1,
    padding: 10,
    height: 50,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

