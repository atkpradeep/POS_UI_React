import React, { useState,useEffect } from 'react';
import {Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageViewer from '@/src/common_components/ImageViewer';
import { useNavigation } from '@react-navigation/native';
import Button from '@/src/common_components/CustomButton';
import { ThemedView } from '@/src/components/ThemedView';
import { loginUser } from '@/src/services/authService';
import { RegisterScreenProps } from '@/src/types/AppNavigatorTypes';

const PlaceholderImage = require('@/src/assets/images/login.jpg');

export default function LoginScreen({ setUserToken }: { setUserToken: (token: string) => void }) {
  const navigation = useNavigation<RegisterScreenProps['navigation']>();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage(() => '');
  }, [errorMessage]); 
  
  const handleLogin = async () => {
    try {
      const loginData = { username, password };
      const result = await loginUser(loginData); // Call login API
      // Save user token to AsyncStorage and update state
      await AsyncStorage.setItem('userToken', result.token);
      setUserToken(result.token);
      Alert.alert('Login Successful');
    } catch (error) {
      setErrorMessage('Invalid login credentials');
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
          {errorMessage ? <Text style={{ color: 'red'}}>{errorMessage}</Text> : null}
        </ThemedView>
        <ThemedView style={styles.footerContainer}>
          <Button label="Login" onPress={handleLogin} icon="sign-in" />
          <Button icon="users" label="Sign Up" onPress={async () => navigation.navigate('Register')} />
          <Button icon="times-circle-o" label="Forgot Password?" onPress={async () => navigation.navigate('ResetPassword')} />
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
    height: '40%',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2
  },
  inputContainer: {
    height: '30%',
    padding: 5
  },
  footerContainer: {
    height: '30%',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    height: 55,
    backgroundColor: "#fff"
  },
});
