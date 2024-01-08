import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigate from './app/AppNavigate';
import StackApp from './app/StackNavigate';

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <AppNavigate />
    </NavigationContainer>
  )
}