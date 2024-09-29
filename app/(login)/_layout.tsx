import { Stack } from 'expo-router';
import React from 'react';

export default function LoginLayout() {
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
  
      <Stack.Screen
        name="login"
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen
        name="signUp"
        options={{
          title: 'Register',
          
        }}
      />
      <Stack.Screen
        name="forgetPassword"
        options={{
          title: 'Forget Password',
          
        }}
      />
    </Stack>
  );
}
