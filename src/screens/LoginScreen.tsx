import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert,ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageViewer from '@/src/common_components/ImageViewer';
import { useNavigation } from '@react-navigation/native';
import Button from '@/src/common_components/CustomButton';
import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';

const PlaceholderImage = require('@/src/assets/images/login.jpg');

export default function LoginScreen({ setUserToken }: { setUserToken: (token: string) => void }) {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogin = async () => {
    // Input validation
    if (!username.trim() || !password.trim()) {
      alert('Username and password cannot be empty.');
      return;
    }
    try {
      // Fake API call
      const response = await axios.post('https://my-fake-api.com/login', {
        username,
        password,
      });

      const { token } = response.data;

      // Save the token in async storage
      await AsyncStorage.setItem('userToken', token);

      // Set user token in state
      setUserToken(token);
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
      setUserToken('test');
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
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </ThemedView>
        <ThemedView style={styles.footerContainer}>
          <Button icon="sign-in" label="Login" onPress={handleLogin} />
          <Button icon="users" label="Sign Up" onPress={() => navigation.navigate('Register')} />
          <Button icon="times-circle-o" label="Forgot Password?" onPress={() => navigation.navigate('ResetPassword')} />
          {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
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
    height: '50%',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2
  },
  inputContainer: {
    height: '20%',
    padding: 5
  },
  footerContainer: {
    height: '30%',
    padding: 15,
    flexBasis: 'auto'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    height: 50,
    backgroundColor: "#fff"
  },
});
