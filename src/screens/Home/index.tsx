import { useState } from 'react'

import { Header } from './components/Header'
import { Search } from '../../components/Search'
import { useUserAcount } from '../../hooks/userAcount'
import {VStack,HStack,Heading,FlatList} from 'native-base'
import { PasswordCard } from '../../components/PasswordCard'

export  function Home() {
    const {userAccounts} = useUserAcount()
    const [userAccountVisibleCounter, setAccountVisibleCounter] = useState(0)
   
    const AcountsLenght = userAccounts.length

    function updateUserAccountVisibleCounter(action: 'increase' | 'decrease'){
        if(action === 'increase'){
            setAccountVisibleCounter(state => state + 1)
        }
        else {
            setAccountVisibleCounter(state => state + -1)
        }
    }

    return(
            <VStack flex={1} bg={'gray.300'}>
                <Header/>
                <VStack paddingX={6} mt={-7}>
                    <Search/>
                    <HStack alignItems={'center'} justifyContent={'space-between'} marginTop={6}>
                        <Heading fontSize={'2xl'} fontWeight={'bold'} color={'gray.700'}>Suas senhas</Heading>
                        <Heading fontWeight={'normal'} color='gray.600' fontSize={'lg'}>
                            {userAccountVisibleCounter} de {AcountsLenght}
                        </Heading>
                    </HStack>
                   <FlatList
                        data={userAccounts}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <PasswordCard
                                updateUserAccountVisibleCounter={updateUserAccountVisibleCounter}
                                serviceName= {item.serviceName}
                                password= {item.password}
                            />
                        )}
                   />
                    
                </VStack>

            </VStack>

    )
}