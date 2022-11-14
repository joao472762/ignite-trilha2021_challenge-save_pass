import { Header } from './components/Header'
import { Search } from '../../components/Search'
import {VStack,HStack,Heading} from 'native-base'
import { PasswordCard } from '../../components/PasswordCard'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { stackScreensProps } from '../../routes/stack.routes'

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