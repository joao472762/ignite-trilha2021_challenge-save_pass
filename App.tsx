import { NativeBaseProvider,VStack,StatusBar } from 'native-base';
import { Home } from './src/screens/Home';
import { Theme } from './src/styles/theme';
import {Rubik_500Medium,Rubik_400Regular,Rubik_700Bold, useFonts} from '@expo-google-fonts/rubik'
import { Loader } from './src/components/Loader';
import { RegisterLogin } from './src/screens/RegisterLogin';

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
        {fontsLoaded ? <RegisterLogin/> : <Loader/>}
      </VStack>
    </NativeBaseProvider>
  );
}
