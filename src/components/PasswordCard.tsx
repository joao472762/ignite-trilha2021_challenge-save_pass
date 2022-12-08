import { useState } from 'react'
import {Feather} from '@expo/vector-icons'
import {HStack, VStack, Text,IconButton} from 'native-base'

interface PasswordCardProps {
    serviceName: string,
    password: string,
    accountId: string,
    
    updateUserAccountVisibleCounter: (accountId: string ,action: 'increase' | 'decrease') => void
}

export function PasswordCard ({password,serviceName,accountId,updateUserAccountVisibleCounter}: PasswordCardProps) {
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    function handlePassowordVisibility(){
     
        if(passwordIsVisible){
            setPasswordIsVisible(false)
            updateUserAccountVisibleCounter(accountId,'decrease')
        }
        else {
            setPasswordIsVisible(true)
            updateUserAccountVisibleCounter( accountId, 'increase')
        }
    }
    return(
        <HStack bg={'gray.200'} padding={14} rounded={'sm'} marginTop={2}>
            <IconButton
                
                _icon={{
                    as: Feather, 
                    name: `${passwordIsVisible ? 'eye' : 'eye-off'}`,
                    color: `${passwordIsVisible ? 'blue.500': 'gray.400'}`,
                    size: 'lg'
                }}
                _pressed={{
                    background: 'transparent'
                }}
                onPress={handlePassowordVisibility}
            />
            <VStack paddingLeft={4}>
                <Text
                    fontSize={'md'}
                    fontWeight={`${passwordIsVisible ? 'medium' : 'bold'}`}
                    color={`${passwordIsVisible ? 'gray.400' : 'gray.700'}`}
                >
                    {serviceName}
                </Text>
                <Text
                     fontWeight={`${passwordIsVisible ? 'bold' : 'medium'}`}
                     color={`${passwordIsVisible ? 'blue.500' : 'gray.400'}`}
                > {passwordIsVisible ? password : 'Sua senha'}</Text>
            </VStack>
            
        </HStack>
    )
}