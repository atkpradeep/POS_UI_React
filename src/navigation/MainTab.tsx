import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, View, Text } from 'react-native';

import HomeScreen from '@/src/screens/HomeScreen';
import ProfileScreen from '@/src/screens/ProfileScreen';
import SettingsScreen from '@/src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();


export default function MainTab({ signOut }: { signOut: () => void }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {() => <HomeScreen signOut={signOut} />}
      </Tab.Screen>
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
