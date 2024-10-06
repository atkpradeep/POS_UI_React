import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ signOut }: { signOut: () => void }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


