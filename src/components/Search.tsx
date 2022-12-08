import { useState } from 'react'
import {Feather} from '@expo/vector-icons'
import {HStack, Input,IconButton} from 'native-base'

interface SearchProps {
    updateUserAccountQuery: (query: string) => void
}

export function Search({updateUserAccountQuery}: SearchProps){
    const [accountQuery, setAccontQuery] = useState('')

    function handleUpdateUserAccountQuery(){
        updateUserAccountQuery(accountQuery)
        setAccontQuery('')
    }

    return(
        <HStack overflow={'hidden'} rounded='lg'>
            <Input
                placeholder='filtre'
                fontSize={'md'}
                onChangeText={setAccontQuery}
                value={accountQuery}
                rounded={0}
                height={14}
                flex={1} bgColor='gray.200'
             

            />
            <IconButton
                rounded={0}
                width={14}
                bg={'yellow.500'}
                _icon={{as: Feather,name:'search', color:'gray.700', size:'lg' }}
                _pressed={{
                    
                    background: 'yellow.400'
                }}
                onPress={handleUpdateUserAccountQuery}
                
                
            />
           
        </HStack>
    )
}