import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/src/screens/LoginScreen';
import RegisterScreen from '@/src/screens/RegisterScreen';
import ResetPasswordScreen from '@/src/screens/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack({ setUserToken }: { setUserToken: (token: string) => void }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login">
        {() => <LoginScreen setUserToken={setUserToken} />}
      </Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}
