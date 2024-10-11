import React, { useState } from 'react';
import { TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import ImageViewer from '@/src/common_components/ImageViewer';
import Button from '@/src/common_components/CustomButton';
import { ThemedView } from '@/src/components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { resetPassword } from '@/src/services/authService';
import { RegisterScreenProps } from '@/src/types/AppNavigatorTypes';

const PlaceholderImage = require('@/src/assets/images/reset_password.jpg');

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<RegisterScreenProps['navigation']>();

  const handlePasswordReset = async () => {

    // Input validation
    if (!email.trim()) {
      alert('Email cannot be empty.');
      return;
    }

    try {
      const resetPasswordData = { email };
      const result = await resetPassword(resetPasswordData); // Call login API
      if (result.status === 201) {
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
          <Button icon="sign-in" label="Reset Password" onPress={handlePasswordReset} />
          <Button icon="sign-in" label="Login" onPress={async () => navigation.navigate('Login')} />
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
    paddingTop: 2,
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

