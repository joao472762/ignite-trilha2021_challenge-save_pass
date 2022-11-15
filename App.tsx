import { NativeBaseProvider,VStack,StatusBar } from 'native-base';
import {Rubik_500Medium,Rubik_400Regular,Rubik_700Bold, useFonts} from '@expo-google-fonts/rubik'

import { Routes } from './src/routes';
import { Theme } from './src/styles/theme';
import { Loader } from './src/components/Loader';
import { UserAcountsContextProvider } from './src/context/UserAcountsContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  })

  return (
    <NativeBaseProvider theme={Theme}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle='dark-content'
        translucent
      />
      <VStack flex={1} bgColor='gray.300'>
        <UserAcountsContextProvider>
          {fontsLoaded ? <Routes/> : <Loader/>}
        </UserAcountsContextProvider>
      </VStack>
    </NativeBaseProvider>
  );
}
