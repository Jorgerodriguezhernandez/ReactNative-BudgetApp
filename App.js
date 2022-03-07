import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {MainContainer} from './constant/stylesApp'
import Home from './components/Home'

export default function App() {
  return (
    <MainContainer>
      <Home />
      <StatusBar style="dark" />
    </MainContainer>
  );
}

