// src/services/authService.ts

import axios from 'axios';

// Define the base URL for your API
const API_URL = 'https://fakeapi.com/api/auth';

export interface LoginData {
  username: string;
  password: string;
}

export interface RegisterData {
  name?: string;
  email: string;
  password: string;
}

export interface ResetPasswordData {
  email: string;
}

// Function to handle login
export const loginUser = async (loginData: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response.data; // Return user data or token
  } catch (error) {
    throw new Error('Unable to login');
  }
};

// Function to handle user registration
export const registerUser = async (registerData: RegisterData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, registerData);
    return response.data; // Return registration status or token
  } catch (error) {
    throw new Error('Unable to register');
  }
};

// Function to handle password reset
export const resetPassword = async (resetData: ResetPasswordData) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, resetData);
    return response.data; // Return success message
  } catch (error) {
    throw new Error('Unable to send reset password email');
  }
};
