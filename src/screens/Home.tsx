import {VStack} from 'native-base'
import { Header } from '../components/Header'
import {SafeAreaView} from 'react-native-safe-area-context'

export  function Home() {
    return(
      
            <VStack flex={1} bg={'gray.100'}>
                <Header/>
            </VStack>

    )
}