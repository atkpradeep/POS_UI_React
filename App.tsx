import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from '@/src/navigation/AuthStack';
import MainTab from '@/src/navigation/MainTab';
import { ActivityIndicator, View } from 'react-native';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Check for token on app launch
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        setUserToken(token);
      } catch (e) {
        console.log('Failed to load token');
      }
      setLoading(false);
    };

    checkToken();
  }, []);

  // Sign out function
  const signOut = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem('userToken'); // Clear the token
      setUserToken(null);  // Reset state
    } catch (e) {
      console.log('Failed to sign out');
    }
    setLoading(false);
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer>
      {userToken ? (
        <MainTab signOut={signOut} />  // Pass signOut function to MainTab
      ) : (
        <AuthStack setUserToken={setUserToken} />  // Pass setUserToken to AuthStack
      )}
    </NavigationContainer>
  );
}
