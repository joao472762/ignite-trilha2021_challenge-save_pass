import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider,VStack } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { Theme } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <VStack flex={1} bgColor='gray.100'>
        <Home/>
      </VStack>
    </NativeBaseProvider>
  );
}
