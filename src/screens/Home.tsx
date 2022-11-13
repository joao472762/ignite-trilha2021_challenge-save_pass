import {VStack,HStack,Heading} from 'native-base'
import { Header } from '../components/Header'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Search } from '../components/Search'
import { PasswordCard } from '../components/PasswordCard'

export  function Home() {
    return(
      
            <VStack flex={1} bg={'gray.300'}>
                <Header/>
                <VStack paddingX={6} mt={-7}>
                    <Search/>
                    <HStack alignItems={'center'} justifyContent={'space-between'} marginTop={6}>
                        <Heading fontSize={'2xl'} fontWeight={'bold'} color={'gray.700'}>Suas senhas</Heading>
                        <Heading fontWeight={'normal'} color='gray.600' fontSize={'lg'}> 01 de total</Heading>
                    </HStack>
                    <PasswordCard/>
                </VStack>

            </VStack>

    )
}