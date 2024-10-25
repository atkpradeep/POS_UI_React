// src/services/productService.ts

import axios from 'axios';
import {Alert } from 'react-native';

const productJson = require('@/src/constants/Products.json');

// Define the base URL for your API
const API_URL = 'https://product.com/api/auth';

export interface Product {
    id: number;
    name: string;
    price: number;
    description:string;
}


// Funtion to get product list
export const getProducts = async (): Promise<Product[]> =>  {
  try {
    const response = productJson;
    console.log(response);
    return response;
  } catch (error) {
    throw new Error('API Error:', error.response ? error.response.data : error.message);
  }
};

// Funtion to get product list
export const getProductById = async (id) => {
    try {
      const response = productJson;
      return response;
    } catch (error) {
      throw new Error('API Error:');
    }
  };