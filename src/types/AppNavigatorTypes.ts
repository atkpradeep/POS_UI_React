
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ResetPassword:undefined;
  Products:undefined;
  Home:undefined;
  // Add any other screens here
};

export type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>;
