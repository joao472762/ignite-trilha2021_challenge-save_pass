import { useState } from 'react'

import { Header } from './components/Header'
import { Search } from '../../components/Search'
import { useUserAcount } from '../../hooks/userAcount'
import {VStack,HStack,Heading,FlatList} from 'native-base'
import { PasswordCard } from '../../components/PasswordCard'

export  function Home() {
    const [userAccountsQuery, setUserAcountsQuery] = useState('')
    const [userAccountVisibleCounter, setAccountVisibleCounter] = useState(0)

    const {userAccounts} = useUserAcount()

    const userAccountsFiltred = userAccounts.filter(account => account.serviceName.includes(userAccountsQuery))

    let userAcconutsWithVisibility = userAccountsFiltred.map(account => (
        {
            ...account,
            isVisible: false
        }
    ))
    
    function updateUserAccountQuery(query: string){
        setUserAcountsQuery(query)
    }

    
    function updateUserAccountVisibleCounter(accountId: string, action: 'increase' | 'decrease'){
        if(action === 'increase'){
            const userAcconutsWithVisibilityUpdated  = userAcconutsWithVisibility.map(account => {
                if(account.id ===  accountId){
                    return {
                        ...account,
                        isVisible: true
                    }
                }
                else account
            })
            userAcconutsWithVisibility =  userAcconutsWithVisibilityUpdated
        }
        else {
            const userAcconutsWithVisibilityUpdated  = userAcconutsWithVisibility.map(account => {
                if(account.id ===  accountId){
                    return {
                        ...account,
                        isVisible: false
                    }
                }
                else account
            })
            userAcconutsWithVisibility =  userAcconutsWithVisibilityUpdated
        }
    }

    const userAcountsLenght = userAccountsFiltred.length

    return(
            <VStack flex={1} bg={'gray.300'}>
                <Header/>
                <VStack paddingX={6} mt={-7}>
                    <Search updateUserAccountQuery={updateUserAccountQuery}/>
                    <HStack alignItems={'center'} justifyContent={'space-between'} marginTop={6}>
                        <Heading fontSize={'2xl'} fontWeight={'bold'} color={'gray.700'}>Suas senhas</Heading>
                        <Heading fontWeight={'normal'} color='gray.600' fontSize={'lg'}>
                            {userAcconutsWithVisibility.length} de {userAcountsLenght}
                        </Heading>
                    </HStack>
                   <FlatList
                        data={userAccountsFiltred}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <PasswordCard
                                updateUserAccountVisibleCounter={updateUserAccountVisibleCounter}
                                accountId={item.id}
                                serviceName= {item.serviceName}
                                password= {item.password}
                            />
                        )}
                   />
                    
                </VStack>

            </VStack>

    )
}