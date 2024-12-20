import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface ButtonProps {
  label: string;
  onPress: () => Promise<void>;
  icon: string;
}

const Button: React.FC<ButtonProps> = ({ label, onPress, icon }) => {
  return (
    
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {icon && <FontAwesome name={icon} style={styles.buttonIcon}/>}
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
  
  );
};

export default Button;


const styles = StyleSheet.create({
  button: {
    backgroundColor: "#336AEA",
    width: '100%',
    height:'25%',
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 7,
    marginBottom: 2,
  },
  buttonIcon: {
    paddingRight: 8,
    fontSize: 14,
    color: "#fff",
  },
  buttonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center',
    textTransform: "uppercase",
    padding: 0
  },
});
