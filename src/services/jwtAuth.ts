import jwt from 'jsonwebtoken';

// Replace this with a secure key from your server
const SECRET_KEY = 'your-secret-key';

async function createJWT() {
  const payload = {
    userId: '12345',
    name: 'John Doe',
    role: 'admin',
  };

  // Create the JWT token
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  console.log('JWT Token:', token);

  return token;
}

async function verifyJWT(token) {
    try {
      // Verify the JWT token
      const decoded = jwt.verify(token, SECRET_KEY);
  
      console.log('Decoded Payload:', decoded);
      return decoded;
    } catch (err) {
      console.error('Invalid token:', err.message);
    }
  }
  
// import React, { useEffect, useState } from 'react';
// import { Button, View, Text } from 'react-native';

// export default function App() {
//   const [token, setToken] = useState(null);
//   const [payload, setPayload] = useState(null);

//   const handleCreateJWT = () => {
//     const newToken = createJWT();
//     setToken(newToken);
//   };

//   const handleVerifyJWT = () => {
//     if (token) {
//       const decodedPayload = verifyJWT(token);
//       setPayload(decodedPayload);
//     }
//   };

//   useEffect(() => {
//     // You can generate and verify JWT when the component mounts
//     handleCreateJWT();
//   }, []);

//   return (
//     <View>
//       <Button title="Create JWT" onPress={handleCreateJWT} />
//       {token && <Text>Token: {token}</Text>}

//       <Button title="Verify JWT" onPress={handleVerifyJWT} />
//       {payload && <Text>Payload: {JSON.stringify(payload)}</Text>}
//     </View>
//   );
// }
