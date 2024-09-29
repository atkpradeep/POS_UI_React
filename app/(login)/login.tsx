
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ImageViewer from '../../src/common_components/ImageViewer';
import { Link } from 'expo-router'
import Button from '../../src/common_components/CustomButton';

const PlaceholderImage = require('../../src/assets/images/login.jpg');

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validateAndLogin = () => {

        // Input validation
        if (!username.trim() || !password.trim()) {
            alert('Username and password cannot be empty.');
            return;
        }

        // Check credentials against the JSON file
        if (username === credentials.username && password === credentials.password) {
            alert('Logged in successfully!');
        } else {
            alert('Invalid username or password.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer PlaceholderImage={PlaceholderImage} />
            </View>
            <View style={styles.element}>
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
            </View>
            <View style={styles.element}>
                <Button icon="sign-in" label="Login" onPress={validateAndLogin} />
                <Button icon="users" label="Register" onPress={() => navigation.navigate('signUp')} />
                <Button icon="times-circle-o" label="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%', // Set the desired width of the container
        height: 330, // Set the desired height of the container
        borderRadius: 10, // Rounded corners for the container
        overflow: 'hidden', // Ensure the image fits within the container
        borderWidth: 2, // Optional: Add border width
        borderColor: '#ccc', // Optional: Set border color
        justifyContent: 'center', // Center the image within the container
        alignItems: 'center',
    },
    element: {
        width: '100%',
        padding: 10, // Padding inside each element
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        height:50
    },
});
