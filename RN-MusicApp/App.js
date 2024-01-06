import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigate from './app/AppNavigate';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigate />
    </NavigationContainer>
  )
}